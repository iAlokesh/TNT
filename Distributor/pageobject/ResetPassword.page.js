const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class ResetPasswordPage{

    //Web Locators

    get emailTextbox(){
        return $('#email') //css for email textbox
    }

    get passwordTextbox(){
        return $('#password') //css for password textbox
    }

    get loginButton(){
        return $("button[type='submit']") //css for login button
    }

    /*
    This method is for reset the password and login into the application

    @param email - email id should be passed
    @param password - password should be passed
    */
    async login(email, password){

        await this.emailTextbox.setValue(email) //Entering value into email id textbox

        await this.passwordTextbox.setValue(password) //Entering value into password textbox

        report.addStep("User has entered email id and password",await browser.takeScreenshot(),"passed")

        await this.loginButton.click() //Clicking on the Login button

        report.addStep("User has clicking on the login button",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new ResetPasswordPage(); //This is for export the ResetPasswordPage class