import java.util.List;

/**
 * This is a data class for reading Json file to a Info Object
 */
class Info {
    Deposits deposits;
    Dates dates;
    Rents rents;
    Parties parties;
    Requirements requirements;
    A_terms a_terms;
    G_pkg g_pkg;
    BuildPkg buildPkg;
    Utility_and_service utility_and_service;


    static class Deposits {
        Boolean rent_required_checked;
        Boolean key_required_checked;
        String last_month_deposit_amount;
        String key_deposit_amount;
    }

    static class Dates {
        Boolean active;
        String movein_date;
        String start_fixed_date;
        String pro_rated_start_date;
        String pro_rated_end_date;
        String pro_rated_due_date;
        String pro_rated_amount;
    }

    static class Rents {
        Boolean yes_checked;
        Boolean m_checked;
        Boolean w_checked;
        String yes_start_date;
        String yes_end_date;
        String no_start_date;
        String base_amount;
    }

    static class Parties {
        Boolean phone_checked;
        Boolean email_checked;
        String landlord_name;
        String tenant_name;
        String landlord_address;
        String landlord_unit;
        String landlord_city;
        String landlord_postal_code;
        String landlord_phone;
        String landlord_email;
        String emergency_name;
        String emergency_relation;
        String emergency_email;
        String emergency_phone;
    }

    static class Requirements {
        Boolean smoke_allowed_checked;
    }

    static class A_terms {
        String pkg_add;
    }

    static class G_pkg {
        List<String> Parking;
        List<String> Damages;
        List<String> Pets;
    }

    static class BuildPkg {
        Data data;

        static class Data {
            List<String> Parking;
            List<String> Damages;
            List<String> Pets;
        }
    }

    static class Utility_and_service {
        Data data;

        static class Data{
            List<String> Electricity;
            List<String> Heat;
            List<String> Gas;
            List<String> Water;
            List<String> Air_Conditioning;
            List<String> WasherOrDryer;
            List<String> Internet;
            List<String> Landline;
            List<String> Cable;
            List<String> Tenant_Parking;
            List<String> Guest_Parking;
            List<String> Lawn_Care;
            List<String> Snow_Removal;
            List<String> Tenant_Insurance;
            List<String> Cleaning_Services;
        }
    }
}