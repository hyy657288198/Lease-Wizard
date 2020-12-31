import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import org.apache.pdfbox.exceptions.COSVisitorException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;


/**
 * This is the main export class
 */
public class Exporter {

    private static PDDocument pdfDocument;


    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println("Please add command line argument for file id");
            return;
        }
        String fileID = args[0];

        // set the path and filename
        String originalPdf = "./OntarioLeaseForm.pdf";
        String data = "./db/json/" + fileID + ".json";
        String targetPdf = "./db/pdf/OntarioLeaseForm.pdf";

        try {
            Info info = readJson(data);
            fillForm(originalPdf, targetPdf, info);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Error!");
            return;
        }

        System.out.println("Export successfully!");
    }


    /**
     * @param path the path of the input Json file that will be read
     * @return the Info object that contains all the data from the Json file
     * @throws FileNotFoundException: throws when cannot find the input Json file specific by the path
     */
    private static Info readJson(String path) throws FileNotFoundException {
        System.out.println("Start reading file");
        Gson gson = new Gson();
        JsonReader reader = new JsonReader(new FileReader(path));
        System.out.println("Read Complete");
        return gson.fromJson(reader, Info.class);

    }

    /**
     * @param originalPdf the name of the original pdf
     * @param targetPdf   the name of the output pdf
     * @param info        the Info object that contains all useful data
     * @throws IOException         throws when cannot fill in the form or cannot find the field
     * @throws COSVisitorException throws when the output file cannot be save
     */
    private static void fillForm(String originalPdf, String targetPdf, Info info) throws IOException, COSVisitorException {
        File f = new File(originalPdf);
        pdfDocument = PDDocument.load(f);

        System.out.println("Start filling the form");
        fillDeposit(info.deposits);
        fillDates(info.dates);
        fillRents(info.rents);
        fillParties(info.parties);
        fillRequirement(info.requirements);

        if (info.a_terms.pkg_add.equals("1")) {
            fillGeneralPkg(info.g_pkg);
        } else if (info.a_terms.pkg_add.equals("2")) {
            fillBuildPkg(info.buildPkg);
        }
        fillUtility(info.utility_and_service.data);


        // This is not required
        // fake data for testing and demo
        unitInfo("666", "55", "Bloor St East", "Toronto", "M4W 3W6",
                true);

        // save the change
        pdfDocument.save(targetPdf);
        pdfDocument.close();
    }


    /**
     * @param data a Deposit object that contains info to fill the form
     * @throws IOException throws when cannot fill in the form or cannot find the field
     */
    private static void fillDeposit(Info.Deposits data) throws IOException {
        if (data.rent_required_checked) {
            setField("RentDeposit", "RentDepositT");
            setField("RentDepositAmount", data.last_month_deposit_amount);
        } else {
            setField("RentDeposit", "RentDepositF");
        }
        if (data.key_required_checked) {
            setField("KeyDeposit", "KeyDepositT");
            setField("KeyDepositAmount", data.key_deposit_amount);
        } else {
            setField("KeyDeposit", "KeyDepositF");
        }
    }

    /**
     * @param data a Dates object that contains info to fill the form
     * @throws IOException throws when cannot fill in the form or cannot find the field
     */
    private static void fillDates(Info.Dates data) throws IOException {
        if (data.active) {
            setField("PreStart", data.pro_rated_start_date);
            setField("PreEnd", data.pro_rated_end_date);
            setField("PreDue", data.pro_rated_due_date);
            setField("PreAmount", data.pro_rated_amount);
        }
    }



    /**
     * @param data a Rents object that contains info to fill the form
     * @throws IOException throws when cannot fill in the form or cannot find the field
     */
    private static void fillRents(Info.Rents data) throws IOException {
        if (data.yes_checked) {
            setField("FixTerm", "On");
            setField("StartDate", data.yes_start_date);
            setField("FixTermDate", data.yes_end_date);
        } else {
            setField("StartDate", data.no_start_date);
        }
        if (data.m_checked) {
            setField("Monthly", "On");
        } else{
            setField("OtherTerm", "On");
            if (data.w_checked) {
                setField("OtherTermInfo", "Weekly");
            } else {
                setField("OtherTermInfo", "Other");
            }
        }
        setField("BaseRent", data.base_amount);
        setField("TotalRent", data.base_amount);
    }

    private static void unitInfo(String unit, String streetNum, String street, String city, String postal,
                                 boolean condo) throws IOException {
        setField("Unit", unit);
        setField("StreetNum", streetNum);
        setField("StreetName", street);
        setField("City", city);
        setField("PostalCode", postal);
        if (condo) {
            setField("Condo", "CondoT");
        } else {
            setField("Condo", "CondoF");
        }
    }


    private static void fillParties(Info.Parties data) throws IOException {
        setField("LandlordName", data.landlord_name);
        if (data.tenant_name.contains(" ")) {
            String[] temp = data.tenant_name.split(" ");
            setField("LastName1", temp[1]);
            setField("FirstName1", temp[0]);
        }
        setField("Unit_L", data.landlord_unit);
        if (data.landlord_address.contains(" ")) {
            String[] temp = data.landlord_address.split(" ", 2);
            setField("StreetNum_L", temp[0]);
            setField("StreetName_L", temp[1]);
        } else {
            setField("StreetName_L", data.landlord_address);
        }
//        setField("POBox", POBox);
        setField("City_L", data.landlord_city);
        setField("Province", "Ontario");
        setField("PostalCode_L", data.landlord_postal_code);
        if (data.email_checked) {
            setField("Email", "EmailT");
            setField("EmailAdd", data.landlord_email);
        } else {
            setField("Email", "EmailF");
        }
        if (data.phone_checked) {
            setField("Phone", "PhoneT");
            String emergency = "";
            if (data.emergency_phone != "") {
                emergency = "Phone Num: " + data.emergency_phone;
            }
            if (data.emergency_email != "") {
                emergency = emergency + ", E-mail: " + data.emergency_email;
            }
            setField("PhoneInfo", emergency);
        } else {
            setField("Phone", "PhoneF");
        }
    }

    private static void fillRequirement(Info.Requirements data) throws IOException {
        if (data.smoke_allowed_checked) {
            setField("SmokingYes", "On");
        } else {
            setField("SmokingNo", "On");
            setField("SmokingRule", "No Smoking");
        }
    }

    private static void fillGeneralPkg(Info.G_pkg data) throws IOException {
        StringBuilder parking = new StringBuilder();
        for(int i = 0; i < data.Parking.size(); i++) {
            parking.append(data.Parking.get(i));
        }
        setField("Parking", parking.toString());

        StringBuilder pet = new StringBuilder();
        for(int i = 0; i < data.Pets.size(); i++) {
            pet.append(data.Pets.get(i));
        }
        setField("Pets", pet.toString());

        StringBuilder damage = new StringBuilder();
        for(int i = 0; i < data.Damages.size(); i++) {
            damage.append(data.Damages.get(i));
        }
        setField("DamageDeposit", damage.toString());
    }

    private static void fillBuildPkg(Info.BuildPkg info) throws IOException {
        StringBuilder parking = new StringBuilder();
        for(int i = 0; i < info.data.Parking.size(); i++) {
            parking.append(info.data.Parking.get(i));
        }
        setField("Parking", parking.toString());

        StringBuilder pet = new StringBuilder();
        for(int i = 0; i < info.data.Pets.size(); i++) {
            pet.append(info.data.Pets.get(i));
        }
        setField("Pets", pet.toString());

        StringBuilder damage = new StringBuilder();
        for(int i = 0; i < info.data.Damages.size(); i++) {
            damage.append(info.data.Damages.get(i));
        }
        setField("DamageDeposit", damage.toString());
    }

    private static void fillUtility(Info.Utility_and_service.Data data) throws IOException {
        if (data.Gas.get(2).equals("true")) {
            setField("Gas", "GasF");
        } else {
            setField("Gas", "GasT");
        }
        if (data.Air_Conditioning.get(2).equals("true")) {
            setField("AC", "ACF");
        } else {
            setField("AC", "ACT");
        }
        if (data.WasherOrDryer.get(2).equals("true")) {
            setField("Laundry", "LaundryF");
        } else {
            setField("Laundry", "LaundryT");
        }
        if (data.Guest_Parking.get(2).equals("true")) {
            setField("VParking", "VParkingF");
        } else {
            setField("VParking", "VParkingT");
        }
        if (data.Electricity.get(2).equals("true")) {
            setField("Electricity", "ElectricityF");
        } else {
            setField("Electricity", "ElectricityT");
        }
        if (data.Heat.get(2).equals("true")) {
            setField("Heat", "HeatF");
        } else {
            setField("Heat", "HeatT");
        }
        if (data.Water.get(2).equals("true")) {
            setField("Water", "WaterF");
        } else {
            setField("Water", "WaterT");
        }
        setField("DetailServices", data.Gas.get(3) + data.Air_Conditioning.get(3) +
                data.WasherOrDryer.get(3) + data.Guest_Parking.get(3) + data.Electricity.get(3) +
                data.Heat.get(3) + data.Water.get(3));


        setField("S1", "Internet");
        if (data.Internet.get(0).equals("true")) {
            setField("S1C", "S1CI");
        } else if (data.Internet.get(1).equals("true")) {
            setField("S1C", "S1CL");
        } else {
            setField("S1C", "S1CT");
        }
        setField("S1Note", data.Internet.get(3));

        setField("S2", "Landline");
        if (data.Landline.get(0).equals("true")) {
            setField("S2C", "S2CI");
        } else if (data.Landline.get(1).equals("true")) {
            setField("S2C", "S2CL");
        } else {
            setField("S2C", "S2CT");
        }
        setField("S2Note", data.Landline.get(3));

        setField("S3", "Cable");
        if (data.Cable.get(0).equals("true")) {
            setField("S3C", "S3CI");
        } else if (data.Cable.get(1).equals("true")) {
            setField("S3C", "S3CL");
        } else {
            setField("S3C", "S3CT");
        }
        setField("S3Note", data.Cable.get(3));

        setField("S4", "Lawn Care");
        if (data.Lawn_Care.get(0).equals("true")) {
            setField("S4C", "S4CI");
        } else if (data.Lawn_Care.get(1).equals("true")) {
            setField("S4C", "S4CL");
        } else {
            setField("S4C", "S4CT");
        }
        setField("S4Note", data.Lawn_Care.get(3));

        setField("S5", "Tenant Parking");
        if (data.Tenant_Parking.get(0).equals("true")) {
            setField("S5C", "S5CI");
        } else if (data.Tenant_Parking.get(1).equals("true")) {
            setField("S5C", "S5CL");
        } else {
            setField("S5C", "S5CT");
        }
        setField("S5Note", data.Tenant_Parking.get(3));

        setField("S6", "Snow Removal");
        if (data.Snow_Removal.get(0).equals("true")) {
            setField("S6C", "S6CI");
        } else if (data.Snow_Removal.get(1).equals("true")) {
            setField("S6C", "S6CL");
        } else {
            setField("S6C", "S6CT");
        }
        setField("S6Note", data.Snow_Removal.get(3));

        setField("S7", "Tenant Insurance");
        if (data.Tenant_Insurance.get(0).equals("true")) {
            setField("S7C", "S7CI");
        } else if (data.Tenant_Insurance.get(1).equals("true")) {
            setField("S7C", "S7CL");
        } else {
            setField("S7C", "S7CT");
        }
        setField("S7Note", data.Tenant_Insurance.get(3));

        setField("S8", "Cleaning Services");
        if (data.Cleaning_Services.get(0).equals("true")) {
            setField("S8C", "S8CI");
        } else if (data.Cleaning_Services.get(1).equals("true")) {
            setField("S8C", "S8CL");
        } else {
            setField("S8C", "S8CT");
        }
        setField("S8Note", data.Cleaning_Services.get(3));
    }



    /**
     * the method that used to change the value of the field
     *
     * @param name:  the name of the field
     * @param value: the value that will be filled in
     * @throws IOException: throws when cannot find the field with the given name
     */
    private static void setField(String name, String value) throws IOException {
        PDDocumentCatalog docCatalog = pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        acroForm.setXFA(null);
        PDField field = acroForm.getField(name);
        if (field != null) {
            field.setValue(value);
        } else {
            System.err.println("No field found with name:" + name); // print error if the block with the name cannot be find
        }
    }

}

