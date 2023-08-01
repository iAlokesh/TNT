const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page
class RegisterPage{

    //Web Locators

    get heading(){
        return $('h5.MuiTypography-root') //css for heading
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

    get userRoleDropdown(){
        return $('#role') // css for user role dropdown
    }

    get selectUserRole(){
        return $$('ul[role="listbox"]>li') //css for select user role 
    }

    get enterPasswordTextbox(){
        return $('#user_password') //css for enter password textbox
    }

    get confirmPasswordTextbox(){
        return $('#confirmPassword') //css for confirm password textbox
    }

    get registerButton(){
        return $('button.MuiButtonBase-root[type="submit"]') //css for register button
    }

    get firstNameValidation(){
        return $('#user_fname-helper-text') //css for first name is required validation
    }

    get lastNameValidation(){
        return $('#user_lname-helper-text') //css for last name is required validation
    }

    get emailValidation(){
        return $('#user_email-helper-text') //css for email is required validation
    }

    get phoneNumberValidation(){
        return $('#user_phoneno-helper-text') //css for phone number is required validation
    }

    get enterPasswordValidation(){
        return $('#user_password-helper-text') //css for enter password is required validation
    }

    get confirmPasswordValidation(){
        return $('#confirmPassword-helper-text') //css for confirm password is required validation
    }

    get stateValidation(){
        return $('#state_code-helper-text') //css for state is required validation
    }

    get userRoleValidation(){
        return $('#role-helper-text') //css for user role is required validation
    }

    /*
    This method is to validate the heading of the register page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check heading of the register page

        report.addStep("Validte the heading of the register page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for register into the application

    @param firstName - first name should be passed
    @param lastName - last name should be passed
    @param emailId - email id should be passed
    @param phoneNumber - phone number should be passed
    @param states - state should be passed
    @param userRoles - user role should be passed
    @param enterPassword - enter password should be passed
    @param confirmPassword - confirm password should be passed
    */
    async register(firstName, lastName, emailId, phoneNumber, states, userRoles, enterPassword, confirmPassword){

        report.addFeature("Track and Trace Application Testing")

        await this.firstNameTextbox.setValue(firstName) //Entering value into first name textbox

        await this.lastNameTextbox.setValue(lastName) //Entering value into last name textbox

        await this.emailTextbox.setValue(emailId) //Entering value into email textbox

        await this.phoneNumberTextbox.setValue(phoneNumber) //Entering value into phone number textbox

        await this.stateDropdown.click() //Clicking on the state dropdown

        let state = await this.selectState //Selecting State/UT from dropdown
        
        for( var i=0; i<state.length; i++){
            
            console.log("State dropdown value : " + await state[i].getText())
            
            const dropdownValue = await state[i].getText() 

            report.addStep('State dropdown value : ' + `${dropdownValue}`)
            
            if(dropdownValue.trim()==states){
            
                state[i].click();
            
                break;
            }
        }
        
        await this.userRoleDropdown.click() //Clicking on the user role dropdown

        let userRole = await this.selectUserRole //Selecting User Role from dropdown
        
        for( var i=0; i<userRole.length; i++){
        
            console.log("User Role dropdown value : " + await userRole[i].getText())
        
            const dropdownValue = await userRole[i].getText()

            report.addStep("User Role dropdown value : " + `${dropdownValue}`)
        
            if(dropdownValue.trim()==userRoles){
        
                userRole[i].click();
        
                break;
            }
        }

        await this.enterPasswordTextbox.setValue(enterPassword) //Entering value into enter password textbox

        await this.confirmPasswordTextbox.setValue(confirmPassword) //Entering value into confirm password textbox

        report.addStep("User has entered first name, last name, email id, phone number, enter password, confirm password and selected state and user role",await browser.takeScreenshot(),"passed")

        await this.registerButton.click() //Clicking on the register button

        report.addStep("User has clicking on the register button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for register with out select the state into the application

    @param firstName - first name should be passed
    @param lastName - last name should be passed
    @param emailId - email id should be passed
    @param phoneNumber - phone number should be passed
    @param userRoles - user roles should be passed
    @param enterPassword - enter password should be passed
    @param confirmPassword - confirm password should be passed
    */
    async register1(firstName, lastName, emailId, phoneNumber, userRoles, enterPassword, confirmPassword){

        report.addFeature("Track and Trace Application Testing")

        await this.firstNameTextbox.setValue(firstName) //Entering value into first name textbox

        await this.lastNameTextbox.setValue(lastName) //Entering value into last name textbox

        await this.emailTextbox.setValue(emailId) //Entering value into email textbox

        await this.phoneNumberTextbox.setValue(phoneNumber) //Entering value into phone number textbox
        
        await this.userRoleDropdown.click() //Clicking on the user role dropdown

        let userRole = await this.selectUserRole //Selecting User Role from dropdown
        
        for( var i=0; i<userRole.length; i++){
        
            console.log("User Role dropdown value : " + await userRole[i].getText())
        
            const dropdownValue = await userRole[i].getText()

            report.addStep("User Role dropdown value : " + `${dropdownValue}`)
        
            if(dropdownValue.trim()==userRoles){
        
                userRole[i].click();
        
                break;
            }
        }

        await this.enterPasswordTextbox.setValue(enterPassword) //Entering value into enter password textbox

        await this.confirmPasswordTextbox.setValue(confirmPassword) //Entering value into confirm password textbox

        report.addStep("User has entered first name, last name, email id, phone number, enter password, confirm password and selected state and user role",await browser.takeScreenshot(),"passed")

        await this.registerButton.click() //Clicking on the register button

        report.addStep("User has clicking on the register button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for register with out select user role into the application

    @param firstName - first name should be passed
    @param lastName - last name should be passed
    @param emailId - email id should be passed
    @param phoneNumber - phone number should be passed
    @param states - state should be passed
    @param enterPassword - enter password should be passed
    @param confirmPassword - confirm password should be passed
    */
    async register2(firstName, lastName, emailId, phoneNumber, states, enterPassword, confirmPassword){

        report.addFeature("Track and Trace Application Testing")

        await this.firstNameTextbox.setValue(firstName) //Entering value into first name textbox

        await this.lastNameTextbox.setValue(lastName) //Entering value into last name textbox

        await this.emailTextbox.setValue(emailId) //Entering value into email textbox

        await this.phoneNumberTextbox.setValue(phoneNumber) //Entering value into phone number textbox

        await this.stateDropdown.click() //Clicking on the state dropdown

        let state = await this.selectState //Selecting State/UT from dropdown
        
        for( var i=0; i<state.length; i++){
        
            console.log("State dropdown value : " + await state[i].getText())
        
            const dropdownValue = await state[i].getText() 

            report.addStep("State dropdown value : " + `${dropdownValue}`)
        
            if(dropdownValue.trim()==states){
        
                state[i].click();
        
                break;
            }
        }

        await this.enterPasswordTextbox.setValue(enterPassword) //Entering value into enter password textbox

        await this.confirmPasswordTextbox.setValue(confirmPassword) //Entering value into confirm password textbox

        report.addStep("User has entered first name, last name, email id, phone number, enter password, confirm password and selected state and user role",await browser.takeScreenshot(),"passed")

        await this.registerButton.click() //Clicking on the register button

        report.addStep("User has clicking on the register button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate first name is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async firstNameIsRequied(validationMessage){

        await expect(this.firstNameValidation).toHaveTextContaining(validationMessage) //Validating the validation message for first name is required for register
        
        report.addStep("Validate first name is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate last name is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async lastNameIsRequied(validationMessage){

        await expect(this.lastNameValidation).toHaveTextContaining(validationMessage) //validating the validation message for last name is required for register

        report.addStep("Validate last name is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate email is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async emailIsRequied(validationMessage){

        await expect(this.emailValidation).toHaveTextContaining(validationMessage) //validating the validation message for email is required for register

        report.addStep("Validate email is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate phone number is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async phoneNumberIsRequied(validationMessage){

        await expect(this.phoneNumberValidation).toHaveTextContaining(validationMessage) //validating the validation message for phone number is required for register

        report.addStep("Validate phone number is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate enter password is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async enterPasswordIsRequied(validationMessage){

        await expect(this.enterPasswordValidation).toHaveTextContaining(validationMessage) //validating the validation message for enter password is required for register

        report.addStep("Validate enter password is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate confirm password is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async confirmPasswordIsRequied(validationMessage){

        await expect(this.confirmPasswordValidation).toHaveTextContaining(validationMessage) //validating the validation message for confirm password is required for register

        report.addStep("Validate confirm password is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate state/UT is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async stateIsRequied(validationMessage){

        await expect(this.stateValidation).toHaveTextContaining(validationMessage) //validating the validation message for state is required for register

        report.addStep("Validate state is required for register",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate user role is required for register

    @param validationMeassage - message which needs to be validated should be passed
    */
    async userRoleIsRequied(validationMessage){

        await expect(this.userRoleValidation).toHaveTextContaining(validationMessage) //validating the validation message for user role is required for register

        report.addStep("Validate user role is required for register",await browser.takeScreenshot(),"passed")
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

            const dropdown = await state[i].getText()

            report.addStep('State/UT has value : ' + `${dropdown}`)
        }

        report.addStep("Validate state has valid values",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for user role has valid values
    */
    async UserRoleHasValidValues(){

        await this.userRoleDropdown.click() //Clicking on the user role dropdown

        await browser.pause(2000) //Pause browser

        let Role = await this.selectUserRole

        for(var i=0; i<Role.length; i++) {

            console.log("Dropdown Value : " + await Role[i].getText())

            const dropdown = await Role[i].getText()

            report.addStep('User role has value : ' + `${dropdown}`)
        }

        report.addStep("Validate user role has valid values",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new RegisterPage(); //This is for exporting the instance of RegisterPage class