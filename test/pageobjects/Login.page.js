const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class LoginPage{

    //Web Locators

    get emailTextbox(){
        return $('#email') //css for email textbox
    }
    
    get passwordTextbox(){
        return $('#password') //css for password textbox
    }

    get loginButton(){
        return $("button.css-1v7p9o5[type='submit']") //css for login button
    }

    get rememberMeCheckbox(){
        return $("input[type='checkbox']") //css for remember me checkbox
    }

    get emailValidation(){
        return $("#email-helper-text") //css for email validation message
    }

    get passwordValidation(){
        return $("#password-helper-text") //css for password validation message
    }

    get forgetPasswordButton(){
        return $('a.MuiTypography-root[href="/resetPassword"]') //css for forget password button
    }

    get getStartedButton(){
        return $('a.MuiTypography-root[href="/register"]') //css for get started button
    }

    /*
    This method is for login into the application

    @param email - email id should be passed
    @param password - password should be passed
    */
   
    async login(email, password){

        report.addStep("Brower has been opened successfully")

        report.addFeature("Track and Trace Application Testing") 

        await this.emailTextbox.setValue(email) //Entering value into email id textbox

        await this.passwordTextbox.setValue(password) //Entering value into password textbox

        report.addStep("User has entered username and password",await browser.takeScreenshot(),"passed")

        await this.rememberMeCheckbox.click() //Clicking on the remember me checkbox

        await this.loginButton.click() //Clicking on the Login button

        report.addStep("User has clicking on the Remember me and LOGIN button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to validate email id is mandatory for login

    @param validationMeassage - message which needs to be validated should be passed
    */
    async emailIsMandatory(validationMessage){
        
        await expect(this.emailValidation).toHaveTextContaining(validationMessage) //validating the validation message for email id textbox

        report.addStep("Email is mandatory validation",await browser.takeScreenshot(),"passed")
    }

   /*
    This method is to validate password is mandatory for login

    @param validationMeassage - message which needs to be validated should be passed
    */
    async passwordIsMandatory(validationMessage){
        
        await expect(this.passwordValidation).toHaveTextContaining(validationMessage) //validating the validation message for password textbox

        report.addStep("Password is mandatory validation",await browser.takeScreenshot(),"passed")
    }

   /*
   This method is for click on the forget password button
   */
    async forgetPassword(){

        await this.forgetPasswordButton.click() //Clicking on the forget password button

        report.addStep("Clicking on the Forget Password button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click on the get started button
    */
    async register(){

        await this.getStartedButton.click() //Clicking on the get started button

        report.addStep("Clicking on the Get Started button",await browser.takeScreenshot(),"passed")
    }
}

module.exports = new LoginPage(); //This is for export the LoginPage class