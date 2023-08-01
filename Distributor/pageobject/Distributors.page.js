const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class DistributorPage{

    //Web Locators

    get heading(){
        return $("div>h3") //css for heading the distributor page
    }

    /*
    This method is to validate the heading of the distributor page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the distributor page

        report.addStep("Validate the heading of the distributor page",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new DistributorPage(); //This is for exporting the instance of DistributorPage class
