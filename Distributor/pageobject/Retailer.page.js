const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class RetailerPage{

    //Web Locators

    get heading(){
        return $("div>h3") //css for heading the retailer page
    }

    get addNewButton(){
        return $('span>button.css-1k1n3oo') //css for add new button
    }

    get addNewRetailersPopUpHeading(){
        return $('#mui-5') //css for pop up heading
    }

    get firstNameTextbox(){
        return $('#user_fname') //css for first name textbox
    }

    get lastNameTextbox(){
        return $('#user_lname') //css for last name textbox
    }

    get emailTextbox(){
        return $('#user_email') //css for email textbox
    }

    get phoneNumberTextbox(){
        return $('#user_phoneno') //css for phone number textbox
    }

    get stateDropdown(){
        return $('#state_code') //css for state dropdown
    }

    get selectState(){
        return $$('ul[role="listbox"]>li') //css for select state
    }

    get submitButton(){
        return $('button[type="submit"]') //css for submit button
    }

    get cancelButton(){
        return $('button[type="cancel"]') //css for cancel button
    }

    get firstNameValidation(){
        return $('#user_fname-helper-text') //css for first name validation
    }

    get lastNameValidation(){
        return $('#user_lname-helper-text') //css for last name validation
    }

    get emailValidation(){
        return $('#user_email-helper-text') //css for email validation
    }

    get phoneNumberValidation(){
        return $('#user_phoneno-helper-text') //css for phone number validation
    }

    get stateValidation(){
        return $('#state_code-helper-text') //css for state validation
    }

    get expandButton(){
        return $('span[title="Toggle All Rows Expanded"]') //css for expand rows button
    }

    get firstNameSearchbox(){
        return $('tr[role="row"]>th:nth-child(2)>div:nth-child(2)>input[class="form-control"]') //css for first name searchbox
    }

    get lastNameSearchbox(){
        return $('tr[role="row"]>th:nth-child(3)>div:nth-child(2)>input[class="form-control"]') //css for last name searchbox
    }

    get emailIdSearchbox(){
        return $('tr[role="row"]>th:nth-child(4)>div:nth-child(2)>input[class="form-control"]') //css for email id searchbox
    }

    get phoneNumberSearchbox(){
        return $('tr[role="row"]>th:nth-child(5)>div:nth-child(2)>input[class="form-control"]') //css for phone number searchbox
    }

    get stateSearchDropdown(){
        return $('tr[role="row"]>th:nth-child(6)>div:nth-child(2)>select[class="form-select"]') //css for state dropdown search
    }

    get selectStateList(){
        return $$('tr[role="row"]>th:nth-child(6)>div:nth-child(2)>select[class="form-select"]>option') //css for select state 
    }

    get zoneSearchDropdown(){
        return $('tr[role="row"]>th:nth-child(7)>div:nth-child(2)>select[class="form-select"]') //css for zone dropdown search
    }

    get selectZoneList(){
        return $$('tr[role="row"]>th:nth-child(7)>div:nth-child(2)>select[class="form-select"]>option') //css for select zone
    }

    get firstNameSearchResult(){
        //return $('tbody[role="rowgroup"]>tr>td:nth-child(2)') //css for first name search result
        return $("//table[@role='table']//following-sibling::div[input[contains(@class,'control')]]/../../../..//following-sibling::tbody[@role='rowgroup']/tr/td[2]")
    }

    get lastNameSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(3)') //css for last name search result
    }

    get emailIdSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(4)') //css for email id search result
    }

    get phoneNumberSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(5)') //css for phone number search result
    }

    get stateSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(6)') //css for state search result
    }

    get zoneSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(7)') //css for zone search result
    }

    get pageNumber(){
        return $('input[type="number"]') //css for page number  
    }

    get showDropdown(){
        return $('div[class="col-md-2"]>select[class="form-select"]') //css for show dropdown
    }

    get selectShow(){
        return $$('div[class="col-md-2"]>select[class="form-select"]>option') //css for select show
    }

    get outSide(){
        return $("div[id='menu-state_code'] div[class='MuiBackdrop-root MuiBackdrop-invisible css-esi9ax']") //css for outside
    }

    /*
    This method is to validate the heading of the retailer page 

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the retailer page

        report.addStep("Validate the heading of the retailer page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on add new button and validate Add New Retailer pop up heading
    */
    async AddNew(){

        await this.addNewButton.click() //Clicking on the add new button 

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the add new button",await browser.takeScreenshot(),"passed")

        await expect(this.addNewRetailersPopUpHeading).toHaveTextContaining('Add New Retailer')

    }

    /*
    This method is for clicking on the first name textbox and enter the first name

    @param firstName- first name should be passed
    */
    async FirstName(firstName){

        await this.firstNameTextbox.click() //Clicking on the first name textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the first name textbox",await browser.takeScreenshot(),"passed")

        await this.firstNameTextbox.setValue(firstName) //Enter the first name

        await browser.pause(2000) //Pause browser

        report.addStep("Entering the first name",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the last name textbox and enter the last name

    @param lastName- last name should be passed
    */
    async LastName(lastName){

        await this.lastNameTextbox.click() //Clicking on the last name textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the last name textbox",await browser.takeScreenshot(),"passed")

        await this.lastNameTextbox.setValue(lastName) //Enter the last name

        await browser.pause(2000) //Pause browser

        report.addStep("Entering the last name",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the email textbox and enter the email

    @param email- email should be passed
    */
    async Email(email){

        await this.emailTextbox.click() //Clicking on the email textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the email textbox",await browser.takeScreenshot(),"passed")

        await this.emailTextbox.setValue(email) //Enter the email

        await browser.pause(2000) //Pause browser

        report.addStep("Entering the email",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the phone number textbox and enter the phone number

    @param phoneNumber- phone number should be passed
    */
    async PhoneNumber(phoneNumber){

        await this.phoneNumberTextbox.click() //Clicking on the phone number textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the phone number textbox",await browser.takeScreenshot(),"passed")

        await this.phoneNumberTextbox.setValue(phoneNumber) //Enter the phone number

        await browser.pause(2000) //Pause browser

        report.addStep("Entering the phone number",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the state dropdown and select the the state

    @param states- state name should be passed
    */
    async State(states){

        await this.stateDropdown.click() //Clicking on the state dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the state dropdown",await browser.takeScreenshot(),"passed")

        let state = await this.selectState //Selecting State/UT from dropdown

        for( var i=0; i<state.length; i++){

            console.log("Dropdown Value : " + await state[i].getText())

            const dropdownValue = await state[i].getText() 

            if(dropdownValue.trim()==states){

                state[i].click();

                break;
            }
        }

        await browser.pause(2000) //Pause browser

        report.addStep("Selecting the state name",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on submit button
    */
    async Submit(){

        await this.submitButton.click() //Clicking on the submit button 

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the submit button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on cancel button
    */
    async Cancel(){

        await this.cancelButton.click() //Clicking on the cancel button 

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the cancel button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that first name is required 

    @param validationMessage - validation message should be passed
    */
    async FirstNameValidation(validationMessage){

        await expect(this.firstNameValidation).toHaveTextContaining(validationMessage) //Validating first name is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that first name is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that last name is required 

    @param validationMessage - validation message should be passed
    */
    async LastNameValidation(validationMessage){

        await expect(this.lastNameValidation).toHaveTextContaining(validationMessage) //Validating last name is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that last name is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that email is required 

    @param validationMessage - validation message should be passed
    */
    async EmailValidation(validationMessage){

        await expect(this.emailValidation).toHaveTextContaining(validationMessage) //Validating email is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that email is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that phone number is required 

    @param validationMessage - validation message should be passed
    */
    async PhoneNumberValidation(validationMessage){

        await expect(this.phoneNumberValidation).toHaveTextContaining(validationMessage) //Validating phone number is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that phone number is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that state is required 

    @param validationMessage - validation message should be passed
    */
    async StateValidation(validationMessage){

        await expect(this.stateValidation).toHaveTextContaining(validationMessage) //Validating state is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that state is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that first name only alphabets are allowed for this field is required 

    @param validationMessage - validation message should be passed
    */
    async FirstNameAlphabetsValidation(validationMessage){

        await expect(this.firstNameValidation).toHaveTextContaining(validationMessage) //Validating first name only alphabets are allowed for this field is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that first name only alphabets are allowed for this field is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that last name only alphabets are allowed for this field is required 

    @param validationMessage - validation message should be passed
    */
    async LastNameAlphabetsValidation(validationMessage){

        await expect(this.lastNameValidation).toHaveTextContaining(validationMessage) //Validating last name only alphabets are allowed for this field is required

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that last name only alphabets are allowed for this field is required",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that email must be a valid email address

    @param validationMessage - validation message should be passed
    */
    async ValidateEmailValidation(validationMessage){

        await expect(this.emailValidation).toHaveTextContaining(validationMessage) //Validating email must be a valid email address

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that email must be a valid email address",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate that phone number must be of 10 digits

    @param validationMessage - validation message should be passed
    */
    async PhoneNumberTenDigitsValidation(validationMessage){

        await expect(this.phoneNumberValidation).toHaveTextContaining(validationMessage) //Validating phone number must be of 10 digits

        await browser.pause(2000) //Pause browser

        report.addStep("Validate that phone number must be of 10 digits",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the expand button and validate the heading
    */
    async ExpandButton(){

        await this.expandButton.click() //Clicking on the expand button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the expand button",await browser.takeScreenshot(),"passed")

        await expect(this.expandButton).toHaveTextContaining('Expand Rows')
    }

    /*
    This method is for clicking on the first name search box, enter the first name and validate the search result

    @param firstName - first name should be passed.
    */
    async FirstNameSearchboxValidation(firstName){

        await this.firstNameSearchbox.click() //Clicking on the first name search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the first name search box",await browser.takeScreenshot(),"passed")

        await this.firstNameSearchbox.setValue(firstName) //Enter the first name

        await browser.pause(2000) //Pause browser

        const UserEnteredName = firstName; //Validate the search result

        const UserResultName = await this.firstNameSearchResult.getText()

        if(UserEnteredName===UserResultName){

            report.addStep('User is able to get the details :' + `${UserResultName}`);
        }

        report.addStep("Validation for the first name search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the last name search box, enter the last name and validate the search result

    @param lastName - last name should be passed.
    */
    async LastNameSearchboxValidation(lastName){

        await this.lastNameSearchbox.click() //Clicking on the last name search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the last name search box",await browser.takeScreenshot(),"passed")

        await this.lastNameSearchbox.setValue(lastName) //Enter the last name

        await browser.pause(2000) //Pause browser

        const UserEnteredName = lastName; //Validate the search result

        const UserResultName = await this.lastNameSearchResult.getText()

        if(UserEnteredName===UserResultName){

            report.addStep('User is able to get the details :' + `${UserResultName}`);  
        }

        report.addStep("Validation for the last name search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the email id search box, enter the email id and validate the search result

    @param emailId - email id should be passed.
    */
    async EmailIdSearchboxValidation(emailId){

        await this.emailIdSearchbox.click() //Clicking on the email id search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the email id search box",await browser.takeScreenshot(),"passed")

        await this.emailIdSearchbox.setValue(emailId) //Enter the email id

        await browser.pause(2000) //Pause browser

        const UserEnteredEmailId = emailId; //Validate the search result

        const UserResult = await this.emailIdSearchResult.getText()

        if(UserEnteredEmailId===UserResult){

            report.addStep('User is able to get the details :' + `${UserResult}`);
        }

        report.addStep("Validation for the email id search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the phone number search box, enter the phone number and validate the search result

    @param phoneNumber - phone number should be passed.
    */
    async PhoneNumberSearchboxValidation(phoneNumber){

        await this.phoneNumberSearchbox.click() //Clicking on the phone number search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the phone number search box",await browser.takeScreenshot(),"passed")

        await this.phoneNumberSearchbox.setValue(phoneNumber) //Enter the phone number

        await browser.pause(2000) //Pause browser

        const UserEnteredPhoneNumber = phoneNumber; //Validate the search result
  
        const UserResult = await this.phoneNumberSearchResult.getText()

        if(UserEnteredPhoneNumber===UserResult){

            report.addStep('User is able to get the details :' + `${UserResult}`); 
        }

        report.addStep("Validation for the phone number search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the state dropdown search box, select the state and validate the search result

    @param stateName - state name should be passed.
    */
    async StateDropdownValidation(stateName){

        await this.stateSearchDropdown.click() //Click the state dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the state search box",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        let state = await this.selectStateList //Selecting state 

        for(var i=0; i<state.length; i++){

            console.log("Dropdown Value : " + await state[i].getText())

            const dropdownValue = await state[i].getText()

            if(dropdownValue.trim()==stateName){

                state[i].click();

                break;
            }
        }

        const UserEnteredState = stateName; //Validate the search result

        const UserResult = await this.emailIdSearchResult.getText() 

        if(UserEnteredState===UserResult){

            report.addStep('User is able to get the details :' + `${UserResult}`); 
        }

        report.addStep("Validation for the state search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the zone dropdown search box, select the zone and validate the search result

    @param zoneName - zone name should be passed.
    */
    async ZoneDropdownValidation(zoneName){

        await this.zoneSearchDropdown.click() //Click the zone dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the zone search box",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        let zone = await this.selectZoneList //Selecting zone

        for(var i=0; i<zone.length; i++){

            console.log("Dropdown Value : " + await zone[i].getText())

            const dropdownValue = await zone[i].getText()

            if(dropdownValue.trim()==zoneName){

                zone[i].click();

                break;
            }
        }

        const UserEnteredZone = zoneName; //Validate the search result

        const UserResult = await this.zoneSearchResult.getText() 

        if(UserEnteredZone===UserResult){

            report.addStep('User is able to get the details :' + `${UserResult}`); 
        }

        report.addStep("Validation for the zone search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the page box and validate the page box

    @param pagenumber - page number should be passed
    */
    async PageValidation(pagenumber){

        await this.pageNumber.click() //Click on the page box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the page box",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        await this.pageNumber.setValue(pagenumber) //Enter page number

        report.addStep("Enter page number on the page box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the show dropdown and select the show
    */
    async ShowValidation(Show){

        await this.showDropdown.click() //Click on the show dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the show dropdown",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        let show = await this.selectShow //Select show

        for(var i=0; i<show.length; i++){
          
            console.log("Dropdown Value : " + await show[i].getText())

            const dropdownValue = await show[i].getText()

            if(dropdownValue.trim()==Show){

                show[i].click();

                break;
            }
        }

        await browser.pause(2000) //Pause browser

        report.addStep("Select the show dropdown",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the show dropdown and validate the values
    */
    async ShowHasValidValues(){

        await this.showDropdown.click() //Clicking on the show dropdown

        await browser.pause(2000) //Pause browser

        let show = await this.selectShow

        for(var i=0; i<show.length; i++){
             
            console.log("Dropdown Value : " + await show[i].getText())
        }
    }

    /*
    This method is for state has valid values
    */
    async StateHasValidValues(){

        await this.stateDropdown.click() //Clicking on the state dropdown

        await browser.pause(2000) //Pause browser

        let state = await this.selectState

        for(var i=0; i<state.length; i++) {

            console.log("Dropdown Value : " + await state[i].getText())

            const dropdownValue = await state[i].getText()

            report.addStep('State dropdown has Value : ' + `${dropdownValue}`)
        }

        await this.outSide.click() //Clicking on outside
    }

    /*
    This method is for zone dropdown has valid values
    */
    async ZoneHasValidValues(){
        
        await this.zoneSearchDropdown.click() //Clicking on the the zone dropdown

        await browser.pause(2000) //Pause browser

        let zone = await this.selectZoneList

        for(var i=0; i<zone.length; i++) {

            console.log("Dropdown Value : " + await zone[i].getText())

            const dropdownValue = await zone[i].getText()

            report.addStep('Zone dropdown has value : ' + `${dropdownValue}`);
        }

        report.addStep("Validation for the zone dropdown",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for state dropdown has valid values
    */
    async StateSearchHasValidValues(){

        await this.stateSearchDropdown.click() //Clicking on the state dropdown

        await browser.pause(2000) //Pause browser

        let state = await this.selectStateList

        for(var i=0; i<state.length; i++) {

            console.log("Dropdown Value : " + await state[i].getText())

            const dropdownValue = await state[i].getText()

            report.addStep('State dropdown has value : ' + `${dropdownValue}`);
        }

        report.addStep("Validation for the state dropdown",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new RetailerPage(); //This is for exporting the instance of RetailerPage class