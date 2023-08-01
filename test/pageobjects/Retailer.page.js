const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class RetailerPage{

    //Web Locators

    get heading(){
        return $("") //css for heading the retailer page
    }

    /*
    This method is to validate the heading of the retailer page 

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the retailer page

        report.addStep("Validate the heading of the retailer page",await browser.takeScreenshot(),"passed")
    }

}
module.exports = new RetailerPage(); //This is for exporting the instance of RetailerPage class