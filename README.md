# Lease Wizard


 ## Description
 * Since in Ontario’s highly regulated residential rental markets, landlords must comply with complex rules that are confusing to landlords and tenants alike. Unfortunately, the vast majority of leases are long documents written in legalese that:
    * Leave people confused or misinformed about their legal rights and obligations
    * Contain terms that parties never read, are ambiguous, or may not comply with the law
    * Leave people feeling vulnerable and upset increasing the risk of conflict
 * Our project offers a streamlined, intuitive and user-interative interface for landlords and tenants to fill out the Ontario Standard Form Lease.
 * For more details, please visit https://lawdesigncolab.ca/portfolio/ontario-standard-lease-form-redesign/


## Key Features
* Content-Customize feature
    * to avoid misunderstanding of legal terms, all legal term contents will be provided by our partner. Thus, we split contents file from code logic, which allows our partner to fill in these contents file with no need to change any coding part after handoff.

* Login 
    * by clicking the sign up button, user could register an account on this web. There provides some input boxes allow user to fill in their basic information. There provides options that let user choose their identity of landlord or tenant.
    * by clicking the sign in button, user could sign in with existing account. There provides options that let user choose their identity of landlord or tenant.
    * by clicking next button in proceed as a guest section, user could use our web page without having an account, and will use the identity as landlord.

* Headers
    * if user login as a guest, will provide a sign in button on the right of header to allow him/her sign in during the process.
    * if user login using an account, will show welcome and the user's name and will also provide a sign out button on the right of header to allow him/her sign out.
    * by clicking the sign in/sign out button, will navigate to login page.

* Progress bar
   * Able to show the progress when the user fill in the data.

* Concerns of Use (only for landlord)
  * allows landlord user to choose his/her level of concerns on different types of issues.

* Rent page
    <!-- * allows user select if rent payment is fixed-termed -->
    * provides options that allow user to choose whether rent payment is fix-termed
    * if a user selects fixed-term:
      * click on the small calendar icon, there will show a mini-calender that allows the user to select the start date and end date
    * if a user selects not fixed-term:
      * click on the small calendar icon, there is a mini-calender that allows the user to select the start date
    * there is a short input line that allows user to fill in the base rent
    * there are options that allow landlords to set the payment frequency, which is every month/week/other

* Utilities and Services:
    * landlord can choose which servers are added in the base rent or he/she can choose whether landlord or tenant pay for the servers. 
       * Included in the Base Rent
       * Managed by the landlord and billed to the Tenant periodically
       * Managed by the Tenant independently.
   * Landlord can add additional information to help their tenants using Custom Notes.
   * Landlord can also add notes and edit own notes and also deleted the own notes.


* Deposits page
    * provides options that allow users to choose if there requires a rent deposit
    * if require rent deposit:
      * there is a short input line that allows user to fill in the amount
      * click on the small calendar icon, there will show a mini-calender that allow user choose rent deposit's due date
    * provides options that allow users to choose if there requires a key deposit
    * if require key deposit:
      * there is a short input line that allows user to fill in the amount
      * click on the small calendar icon, there will show a mini-calender that allow user choose key deposit's due date
    * there is a little "i" icon next to each deposit's name, if the user moves the mouse onto the icon, will show up a brief explanation of this type of deposit (will be filled in by partner later, refer to Content-Customize feature)
  <!-- * choose to ask for a rent deposit for the last month deposit and key deposit -->

* Move-in Dates Page
    * click on the small calendar icon, there will show a mini-calender that allow user to select the move-in date
    * could select the start date of the fixed-term tenancy, which is also considered as our rent payment due date
    * there are options of add pro-rated rent of not, if landlord want to add pro-rated rent, click on it and information will drop down, then:
        * will provide mini-calendars if click on the calendar icons for user to select the start and end date when the tenant needs to pay a pro-rated rent
        * provides a short input line that user could fill in this pro-rated rent amount
        * will provide mini-calendars if click on the calendar icons that user could choose the payment due date of this pro-rated rent

* Payment Methods page
   * provides options that allow users to choose different means of payment methods between:
        * email transfer (then need to fill in an email address to receive the money transfer)
        * cheque
        * cash
        * PayPal
        * other (then need to fill in the user-defined payment method)
    * provides options that allow users to choose whether request a post-dated cheque


* Timeline page
  * based on the dates selected in previous pages, this page will produce a list view of all important dates
  * dates will be separated into 4 types: fixed-term, month-to-month, pro-rated and important dates.
  * dates will be displayed in a bubble of different colors based on their types, types and corresponding colors are labeled in Legend section.
  * if in Rent page, selected [fixed-term] and rents due on every [month/week]:
    * will automatically calculate and list every month/week's rent due date until fix-term ends
    (reminder: rent payment due date are selected through "start date of the fixed-term tenancy" in Move-in Dates page)
    * if duration of fixed-term selected is larger than one year, will only display rent due dates for one year
  * if in Rent page, selected [not fixed-term] and rents due on every [month/week]:
    * will automatically calculate and list every month's rent due date until fix-term ends
    * will only display rent due dates for 12 months

* Timeline: Questions and Answers page
    * display some common questions regarding to timing issue
    * will drop down the answer by click on the certain question (content will be filled in by partner later, refer to Content-Customize feature)
    * provides a timeline calculator on the right side of the page, which calculates the last date tenant should inform landlord of moving out.

* Parties Page
    * provides input boxes to let tenant and landlord fill in their names
    * could add more than 1 tenant by clicking "Add Tenant" (dropdown info box will be filled in by partner later, refer to Content-Customize feature)
    * fill in landlord contact information, only can be edited by landlords,including:
        * address
        * unit
        * city/town
        * postal code
        * choose "can contact by phone" by clicking on the corresponding check box, then there is an input line to allow the landlord fill in phone number
        * choose "can contact by email" by clicking on the corresponding check box, then there is an input line to allow the landlord in email address
    * could add a building manager by clicking "Add Building Manager" (dropdown info box will be filled in by partner later, refer to Content-Customize feature)
    * could add a landlord by clicking "Add Landlord" (dropdown info box will be filled in by partner later, refer to Content-Customize feature)
    * fill in tenant's emergency contact information, only can be edited by tenants, including:
        * name
        * relation to tenant
        * email
        * phone number

* Changes to the Parties page
    * lists some common questions regarding to Parties section
    * click on the certain question will drop down the corresponding answer (content will be filled in by partner later, refer to Content-Customize feature)

* Legal Requirement Page
    * lists some common day to day issues, including:
        * Utilities
        * Installations, Maintenance & Repairs
        * Emergencies
        * Landlord Entry
        * Unit Decoration & Modifications
        * Conflict Resoulution
        * Pets
        * Smoking
    * click on the certain issue will drop down its corresponding information (content will be filled in by partner later, refer to Content-Customize feature)


* Navigation bar
  * will show up on the left side of every page after login and agreeing the term of use.
  * display the table of contents, which are all the main sections which the Ontario Lease Form has.
  * click on a certain section name will drop down a list of every pages in this section.
  * click on a certain page's, will navigate to that page.

* Learn More
    * displays on the right side of every page after login and agreeing the term of use
    * provides some questions that could view answer by clicking on it (contents are leaved as placeholder, which is asked by partner to let them fill in later):
        * provides sidebar for certain page
        * provides other common questions including: Who's this for? / Can I trust it? / Why standard terms?

* Footer
    * provides a progress bar that will show the current progress completed extent, and will update along with user filling in the pages
    * provides a next and previous button that allows user to navigate to next/previous page



* Additional terms main page
  * view what the additional terms are or if necessary to add.
  * select how to build my additional terms.
  * go to the branching logic page that they choose.
  * go back to previous page.
  * go to this main page by selecting from the navigation bar.
  * update the progress bar if selected some choices in this page.


* Attach general package
  * view all the general additional term.
  * update the progress bar if selected some choices in this page.
  * update the progress bar of this page
  * go back to previous page.
  * go to next page.

* Build custom package
  * view all the additional terms.
  * select the additional terms that landlord want to add into the final additional package.
  * write some new additional terms by Landlord themselves and Landlord can choose to add the new additional terms to final package or not.
  * update the progress bar of this page.
  * popup a message when additional terms add into (or delete from) the final additional package.

* Prohibit term view page
  * view all the additional terms provide by the landlord. If landlord choose the general package, show as general package. If choosing the bild custom package show custom terms.
  * go back to previous page.
  * update the progress bar of this page.
  * go to next page.

* Export to PDF
    * The PDF form is filled by a small java program which has already built into the ExportToPDF.jar and will be executed automatically by our Server if a request is sent by the clients. This program will read a JSON file and fill the formal Ontario Residential Tenancy Agreement form pdf form based on those data.
    * Our Webpage(client) will be responsible for collecting all data for filling the form. Also, it will also send those data to the server and request for the pdf form.
    * Our Server will receive the JSON and save it as a JSON file for the java program to read. Then it will execute the java program to get a filled the formal Ontario Residential Tenancy Agreement pdf form for view or download.


 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).

* URL of our project: https://ontario-lease-wizard.herokuapp.com/ 
* Or set up locally:
  1. In order to get the ExportToPDF function works, please make sure you have Java 8 JRE installed in your machine. You can download here: https://www.java.com/en/download/
  2. Get into our repo: https://github.com/csc301-fall-2019/team-project-lease-wizard and clone it.
  3. In terminal, use "cd" to navigate to "team-project-lease-wizard/Client" folder.
  4. Type command line, "yarn install", in terminal to install yarn and then "yarn run build" to build the static webpage.
  5. Type command line, "cd .." to navigate to "team-project-lease-wizard folder.
  6. Type command line, "yarn install", in terminal to install yarn and then "yarn start" to start the server.
  7. Open a browser(recomand to use chrome) and enter the address https://localhost:3000 or what ever address that is shown in the terminal.

## Instructions

* Get into our main page:
  1. In the welcome page(first page), click "GET STARTED" button, then will direct you to a page where you can select to sign up, login or proceed using guest account as Landlord identity. 
  2. If you do not have an account with our website, go to sign up page. 
  3. If you already have an account, login. 
  4. If you do not have an account and just want to have a try on our website, click next button in Proceed as Guest secion, you will automatically have landlord views for our website.

* Terms of use:
  1. must agree our terms of use to enter the main page.

* Learn More section:
  1. Click the sub-tag of each learn more, the details will be shown. And if you click sub-tag again, the details will hide.

* Instructions for using "navigation bar" feature:
  1. After getting into our main page, you can see the navigation bar, called "Table of Contents", which is on the left of this page.
  2. Click a specific main navigation item, like "Money" or "Timeline" or "Additional Terms". And you can see its own sub navigation list. If you click main item again, the sub navigation list will hide.
  3. Click a specific sub navigation list item, like "additional terms" under "Additional Terms" main navigation bar, then you can see you have jumped to additional term main page.

* Instructions for using "Login/Sign Up/Sign Our/Guest" feature:
  1. Click NEXT in 'Proceed as Guest' secion to use our project without an account, default as a landlord, can go back to the login start page at any pages by clicking Sign In button on the header.
  2. Click SIGN UP to create an account, must enter first name, last name, email address as username, password for twice, and choose the identity you want to register as a tenant or landlord. Password should be at least 8 characters long. An user could both be tenant and landlord identity account.
  3. Click LOGIN to sign in using registered account, by entering account, password and choosing tenant or landlord user type.

### If LOGIN as a landlord OR proceed as a guest, will display landlord view
* Instructions for "Concerns" page:
  1. Drag the dots to choose their own concerns.
  2. Add other concerns at the input box near the bottom if needed.
  3. Click submit to submit all date to back-end(may not fulling operate, will finish it in next iteration)
  4. Click "NEXT" button to jump to "Rent" page or click "Rent" in the "Money" section in "navigation bar".

* Instructions for using "Rent page" feature:
  1. Under the question "Will there be a fixed-term?", click "yes" button if the rent has a fixed-term, vise versa.
  2. If click "yes" button, users should choose the start date and end date of the rent
  3. If click "no" button, users should choose the start date of the rent
  4. Set the base rent
  5. Select the rent period from month/week/other by clicking on the corresponding button
  6. Click "NEXT" button to jump to "Utilities and Services" page or click "Utilities and Services" in the "Money" section in "navigation bar".
  7. Click "PREVIOUS" button to back to "concerns" page.

* Instructions for using "Utilities and Services" feature:
  1. Utilities and services are listed in the left column: the checked options will be added to your lease. To add a custom option, type in utility or service at the bottom of the list
  2. For each utility or service covered by the Lease Agreement, check one of the three boxes:
    * Included in the Base Rent
    * Managed by the landlord and billed to the Tenant periodically
    * Managed by the Tenant independently.
  3. For each utility or service, you can include additional information to help your tenant using Custom Notes, e.g utility company information, account numbers, etc.
  4. And for the "add notes", we can add notes and edit own notes and also deleted the own notes.


* Instructions for using "Deposits page" feature:
    1. For the rent deposit of the last month, the landlord can select not required or required.
    2. If the landlord select "Last months rent deposit is required", s/he can set the amount and the due date.
    3. For the key deposit, the landlord can select not required or required.
    4. If the landlord select "Key deposit is required", s/he can set the amount and the due date.
    5. Click "NEXT" button to jump to "Move-in Dates" page or click "Move-in Dates" in the "Money" section in "navigation bar".
    6. Click "PREVIOUS" button to back to "Utilities and Services" page.

* Instructions for using "Move-in Dates page" feature:
    1. Select "Move-in Date" in the first input box.
    2. Select the "Start of the Fixed-Term Tenancy" in the secont inout box.
    3. By clicking "Add pro-rated rent" bottom, more information of "pro-rated rent" will be shown.
    4. Set the start date of pro-rated rent in the third input box.
    5. Set the end date of pro-rated rent in the forth input box.
    6. Set the amount of pro-rated rent in the in the fifth input box which has a "$" in front it. (only digit is vaild)
    7. Set the due date of pro-rated rent in the sixth input box.
    8. Click "NEXT" button to jump to "Timeline" page or click "Timeline" in the "Timeline" section in "navigation bar".
    9. Click "PREVIOUS" button to back to "Deposits" page.

* Instructions for using "Timeline page" feature in "Timeline":
    1. In the timeline page, scroll up and down to view recent milestone dates.
    2. All previously dates selected by landlord will be listed and will be distinguised by different categories.
    3. Click "NEXT" button to jump to "Timeline: Questions and Answers" page or click "Questions and Answers" in the "Timeline" section in "navigation bar".
    4. Click "PREVIOUS" button to back to "Move-in Dates" page.

* Instructions for using "Timeline: Questions and Answers" feature in "Timeline":
    1. In the Questions and Answers page, click on the question will expand the corresponding answer and click again will hide the answer.
    2. Click "NEXT" button to jump to "Parties page" page or click "Parties" in the "Parties" section in "navigation bar".
    3. Click "PREVIOUS" button to back to "Timeline" page.

* Instructions for using "Parties page" feature:
  1. Legal names and landlord information both only be edited by landlord, cannot be updated by tenants.
  2. Tenant Emergency Information only be edited by tenant, cannot be updated by landlords.
  3. Click "NEXT" button to jump to "Changes to Parties page" page or click "Changes to Parties" in the "Parties" section in "navigation bar".
  4. Click "PREVIOUS" button to back to "Timeline: Questions and Answers" page.

* Instructions for using "Changes to Parties page" feature:
  1. In the Changes to Parties page, click on the question will expand the corresponding answer and click again will hide the answer.
  2. Click "NEXT" button to jump to "Legal Requirements page" page or click "Legal Requirements" in the "Legal Requirements" section in "navigation bar".
  3. Click "PREVIOUS" button to back to "Parties" page.

* Instructions for using "Legal Requirement page" feature:
  1. In the Legal Requirement page, will display some day to day issues. Click on the issue will expand the corresponding answer and click again will hide the answer.
  2. Click "NEXT" button to jump to "Additional Terms main page" page or click "Additional Terms" in the "Additional Terms" section in "navigation bar".
  3. Click "PREVIOUS" button to back to "Changes to Parties page" page.


* Instructions for using "Additional Terms main page" feature:
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

Instructions for using "Prohibit term view page" feature:
  1. Suppose you have jumped to prohibit term page by using the next button from the legal requirement as a tenent
  2. View all additinal terms from landord bringing up
  3. Click on a specific main category of additional items, like "Parking". Now you can see the details for this category of prohibit terns. Click the line about "I have readed about this."
  4. Click the "PREVIOUS" button at the footer to go to legal requirements main page.
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
  1. Click "PREVIEW" or "Print your release" to view the exported pdf document.
  2. Click "Save as PDF" to download the exported pdf document.
  3. Click "Restart the process" to back to "welcome page" of our web app.
  4. Click the "Send to tenant to review", a popup window will be popped up and Landlord have to send a valid email(which means the email has to be registered before) and there are 500 characters limitation of the email word count. After sending the email successfully, a pop up message will be popped. (Since partner does not request a server so we do not need to sent the email through server.)
  5. Note: The "CLOSE" button is not active yet.

* ExportToPDF:
  - For D2, this is achieve by a separate Java program.
  - Now, we have integrated the Java program into a Express Nodejs server which could handle the request of clients and execute the Java program to fill the pdf form for view or download.  


### If LOGIN as a tenant, will display tenant view
* Instructions for using "Timeline page" feature in "Timeline":
    1. In the timeline page, scroll up and down to view recent milestone dates.
    2. All previously dates selected by this tenant's landlord will be listed and will be distinguised by different categories.
    3. Click "NEXT" button to jump to "Timeline: Questions and Answers" page or click "Questions and Answers" in the "Timeline" section in "navigation bar".

* Instructions for using "Timeline: Questions and Answers" feature in "Timeline":
    1. In the Questions and Answers page, click on the question will expand the corresponding answer and click again will hide the answer.
    2. Click "NEXT" button to jump to "Parties page" page or click "Parties" in the "Parties" section in "navigation bar".
    3. Click "PREVIOUS" button to back to "Timeline" page.

* Instructions for using "Parties page" feature:
  1. Legal names and landlord information both only be edited by landlord, cannot be updated by tenants.
  2. Tenant Emergency Information only be edited by tenant, cannot be updated by landlords.
  3. Click "NEXT" button to jump to "Changes to Parties page" page or click "Changes to Parties" in the "Parties" section in "navigation bar".
  4. Click "PREVIOUS" button to back to "Timeline: Questions and Answers" page.

* Instructions for using "Changes to Parties page" feature:
  1. In the Changes to Parties page, click on the question will expand the corresponding answer and click again will hide the answer.
  2. Click "NEXT" button to jump to "Legal Requirements page" page or click "Legal Requirements" in the "Legal Requirements" section in "navigation bar".
  3. Click "PREVIOUS" button to back to "Parties" page.

* Instructions for using "Legal Requirement page" feature:
  1. In the Legal Requirement page, will display some day to day issues. Click on the issue will expand the corresponding answer and click again will hide the answer.
  2. Click "NEXT" button to jump to "Prohibit Terms page" page.
  3. Click "PREVIOUS" button to back to "Changes to Parties page" page.


* Instructions for using "Prohibit Terms page" feature:
  1. In the Prohibit Terms page, will display some prohibited terms for having guests, pets or decorate. Click on the issue will expand the corresponding terms, click on the "I have read and understood this" to agree with this term.
  2. Click the "NEXT" buttion to jump to "end" page. 
  3. Click "PREVIOUS" button to back to "Legal Requirement page" page.


* Instructions for "end" page:
  1. Click "PREVIEW" or "Print your release" to view the exported pdf document.
  2. Click "Save as PDF" to download the exported pdf document.
  3. Click "Restart the process" to back to "welcome page" of our web app.
  4. Click the "Send to tenant to review", a popup window will be popped up and Landlord have to send a valid email(which means the email has to be registered before) and there are 500 characters limitation of the email word count. After sending the email successfully, a pop up message will be popped. (Since partner does not request a server so we do not need to sent the email through server.)
  5. Note: The "CLOSE" button is not active yet.

* ExportToPDF:
  - For D2, this is achieve by a separate Java program.
  - Now, we have integrated the Java program into a Express Nodejs server which could handle the request of clients and execute the Java program to fill the pdf form for view or download.  


## License & Copyright
Copyright (c) 2019 Jingqi Zhang, Qi Zou, Shang Liu, Quan Xu, Zijin Zhang, Tianhang Wang and Yiyang Hua.
Code released under the [MIT License](team-project-lease-wizard-master/LICENSE).
