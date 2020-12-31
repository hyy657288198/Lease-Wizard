# Lease Wizard

## Description
 * A high-level description from an end-user's perspective:
    * Users can user our web application to sign the Ontario Lease Agreement as landlords or tenants in a standardized, simplific and scientific way and user can get a pdf version of Ontario Lease Agreement fianlly.
 * The problem we are trying to solve:
    * We want to simplify all the procedures of signing the Ontario Lease Agreement between landlords and tenants. For example, Landlords do not need to write the additional terms anymore. In our app, Landlords can select and edit their additional terms from our additional terms package by click the "ADD" button. Also, there are so many content that user do not need to read in Ontario Lease Agreement. So we extract the important sections of Ontario Lease Agreement to let users fill in information.
 * Our application solves this problem, beacuse:
   * We simplify all the procedures of signing the Ontario Lease Agreement between landlords and tenants by extracting imprtant sections of Ontario Lease Agreement.

## Key Features
* Navigation bar
  * navigate what all the main parts the lease form have.
  * naviate what the sub parts are for each main part.
  * go to the specific page that the user choose from the sub navigation item.
  * view the navigation bar after aggreeing the term of use.

* Additional terms main page
  * view what the additional terms are or if necessary to add.
  * select how to build my additional terms.
  * go to the branching logic page that they choose.
  * go back to previous page.
  * go to this main page by selecting from the navigation bar.

* Rent page
  * select if the rent has a fixed-term
  * select the start date and end date if the rent has a fixed-term
  * select the start date if the rent does not have a fix-term
  * set the base rent
  * select the rent period from month/week/other
  
* Deposits page
    * choose to ask for a rent deposit for the last month deposit and key deposit

* Move in date Page
    * set the move in date
    * select the start date of fix-term
    * choose to add pro-rated rent
    * select the start, end and due dates of pro-rated rent
    * set the amount of pro-rated rent

* Timeline page
  * view all milestone dates (eg. Rent Payment Due, Move-in date, Fixed-term starts, Fixed-term ends, etc.) as a list. 

* Questions and Answers page
  * view common Question and Answers regarding timeline (eg. How can the Landlord end the tenancy?).
    

* Attach general package(in Additional terms Section)
  * view all the general additional term.
  * go back to previous page.
  * go to next page.

* Build custom package (in Additional terms Section)
  * view all the additional terms.
  * select the additional terms that landlord want to add into the final additional package.
  * write some new additional terms by Landlord themselves and Landlord can choose to add the new additional terms to final package or not.
  * popup a message when additional terms add into (or delete from) the final additional package.

* Export to PDF
    * implement as a small java program
    * read the Json file that contains all the information that is collected by our website and fill those data in the formal Ontario Residential Tenancy Agreement form to generate a standard form for lease so that our users are able to review and download or directly share with the tenants by our website.
    * demo version of the final product. For d2, this have to be run manually and it will read the given demo data and let user to key in the filename of output PDF document. For our final product, it will be run by the server side of the website that will be able to read the given data,automatically names the output file and send the form back to the client side of out website for user to review.


## Instructions
* URL of our project: https://aqueous-ridge-59131.herokuapp.com/  
* Or set up locally:
  1. Get inot our repo: https://github.com/csc301-fall-2019/team-project-lease-wizard and clone it.
  2. In terminal, use "cd" to navigate to "team-project-lease-wizard" folder.
  3. Type command line, "yarn install", in terminal to install yarn.
  4. Type command line, "yarn start", in terminal to start our web app.

* Learn More section:
  1. Click the sub-tag of each learn more, the details will be shown. And if you click sub-tag again, the details will hide.

* Get into our main page:
  1. In the welcome page(first page), click "GET STARTED" button, then click the "NEXT" button under the "Proceed as Guest", then click "I agree" and "NEXT", then it is our main page. 

* Instructions for using "navigation bar" feature:
  1. After getting into our main page, you can see the navigation bar, called "Table of Contents", which is on the left of this page.
  2. Click a specific main navigation item, like "Money" or "Timeline" or "Additional Terms". And you can see its own sub navigation list. If you click main item again, the sub navigation list will hide.
  3. Click a specific sub navigation list item, like "additional terms" under "Additional Terms" main navigation bar, then you can see you have jumped to additional term main page.

* Instructions for "concerns" page:
  1. Drag the dots to choose their own concerns.
  2. Add other concerns at the input box near the bottom if needed.
  3. Click submit to submit all date to back-end(may not fulling operate, will finish it in next iteration)
  4. Click "NEXT" button to jump to "Rent" page or click "Rent" in the "Money" section in "navigation bar".

* Instructions for using "rent page" feature:
  1. Under the question "Will there be a fixed-term", click "yes" button if the rent has a fixed-term, vise versa.
  2. If click "yes" button, users will be able to choose the start date and end date of the rent
  3. If click "yes" button, users will be able to choose the start date of the rent
  4. Set the base rent
  5. Select the rent period from month/week/other by clicking on the corresponding button
  6. Click "NEXT" button to jump to "Deposits" page or click "Deposits" in the "Money" section in "navigation bar".
  7. Click "PREVIOUS" button to back to "concerns" page.

* Instructions for using "deposit page" feature:
    1. For the rent deposit of the last month, the landlord can select not required or required. 
    2. If the landlord select "Last months rent deposit is required", s/he can set the amount and the due date.
    3. For the key deposit, the landlord can select not required or required. 
    4. If the landlord select "Key deposit is required", s/he can set the amount and the due date.
    5. Click "NEXT" button to jump to "move in date" page or click "Move-in Dates" in the "Money" section in "navigation bar".
    6. Click "PREVIOUS" button to back to "Rent" page.

* Instructions for using "move in date page" feature:
    1. Select "Move-in Date" in the first input box.
    2. Select the "Start of the Fixed-Term Tenancy" in the secont inout box.
    3. By clicking "Add pro-rated rent" bottom, more information of "pro-rated rent" will be shown.
    4. Set the start date of pro-rated rent in the third input box.
    5. Set the end date of pro-rated rent in the forth input box.
    6. Set the amount of pro-rated rent in the in the fifth input box which has a "$" in front it. (only digit is vaild)
    7. Set the due date of pro-rated rent in the sixth input box.
    8. Click "NEXT" button to jump to "Timeline" page or click "Timeline" in the "Timeline" section in "navigation bar".
    9. Click "PREVIOUS" button to back to "Deposits" page.

* Instructions for using "Timeline" feature in "Timeline":
    1. In the timeline page, scroll up and down to view recent milestone dates.
    2. Click "NEXT" button to jump to "Questions and Answers" page or click "Questions and Answers" in the "Timeline" section in "navigation bar".
    3. Click "PREVIOUS" button to back to "Move-in Dates" page.

* Instructions for using "Questions and Answers" feature in "Timeline":
    1. In the Questions and Answers page, click on the question will expand the corresponding answer and click again will hide the answer.
    2. Click "NEXT" button to jump to "Additional terms main page" page or click "Additional terms" in the "Additional terms" section in "navigation bar".
    3. Click "PREVIOUS" button to back to "Timeline" page.

* Instructions for using "additional terms main page" feature:
  1. Suppose you have jumped to the additional terms mage page by using the navigation bar(see the instructions for using navigation bar feature)
  2. You can see there are 3 choices of building your additional terms: "Continue without additional terms", "Attach general package", and "Build from scratch"
  3. Click a way of building additional items. Notice that Only one way would be selected at a time. Then you can see the "NEXT" button has changed to be clickable.
  4. Click the "NEXT" buttion to jump to next page. "Without additional terms" goes to "end" page, "General package" goes to "general package" page, and "Build from scratch" goes to "build package" page.
  5. Click the "PREVIOUS" button at the footer to go to previous page.

* Instructions for using "Attach general package" feature:
  1. Suppose you have jumped to the additional terms mage page by using the navigation bar(see the instructions for using navigation bar feature)
  2. Choose "Attach general package" and click "NEXT" button
  3. Click on a specific main category of additional items, like "Parking". Now you can see the details for this category of additional items in general.
  4. Click the "PREVIOUS" button at the footer to go to additional terms main page.
  5. Click the "NEXT" button at the footer, going to "end" page.

* Instructions for using "Build custom package" feature:
  1. Suppose you have jumped to the additional terms mage page by using the navigation bar(see the instructions for using navigation bar feature) If not, click the navigation bar, "Additional Terms", of "Additional Terms" in the "Table of Contents"
  2. Choose "Build from scratch" and click "NEXT" button
  3. Choose the category("Parking", "Damages", "Pets") from the left side.
  4. Click the category, then the additional terms of this category show at the right side.
  5. Users can click the plus sign ("+") to add the specific term into the final package. Also, users can click the minus sign ("-") to delete the specific term from the final package
     * After add a term into final package, a popup message show up at the top
     * After delete a term from final package, a popup message show up at the top
  6. Users can click the plus sign ("+") in front of "Custom term" to make a new additional term.
     * A popup window will show up.
     * Users can type their new additional term in the text box in the popup window within 250 characters.
       * Users can cancel the window whenever they want by click the "CANCEL" button
       * After users click "ADD" button, the new additional term will display on the right side with a plus sign ("+").
       * Users can add/delete the new additional term to/from the final package
  7. Users can click "Learn More" to know more information of the app.
  8. Click "PREVIOUS" button to back to "Additional Terms" page
  9. Click "NEXT" button to jump to "End" page

* Instructions for "end" page:
  1. Click "Restart the porcess" to back to "welcome page" of our web app.
  2. Note: The "CLOSE" button is not active yet.

* This part is a separate program, we will link this program to our web app later by construct a server-end.
    * Instructions for using ExportToPDF feature
        1. Please install Java 8 JRE in your machine.
        You can download here: https://www.java.com/en/download/
        2. Enter the directory team-project-lease-wizard/src/ExportToPDF
        3. Run the ExportToPDF.jar file: \
        Please open a Terminal/Command Line in the root directory of Export program "ExportToPDF" and execute the command "java -jar ExportToPDF.jar" to run Export program.
        4. Please follow the instruction to key in a valid file name
        and the output file with name you keyed in will be generated
        in no more than 10 seconds.
