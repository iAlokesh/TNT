const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class OrderTokenTablesPage{

    //Web Locators

    get heading(){
        return $('div>a[aria-current="page"]') //css for heading the tokens page
    }

    get recivedTokensButton(){
        return $("div[class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-coghet'] span:nth-child(3) button:nth-child(1)") //css for recived tokens button
    }

    get assignedTokensButton(){
        return $("div[class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-coghet'] span:nth-child(2) button:nth-child(1)") //css for assigned tokens button
    }

    get inactiveTokensTableButton(){
        return $("div[class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-coghet'] span:nth-child(1) button:nth-child(1)") //css for inactive tokens table button
    }

    /*
    This method is to validate the heading of the order tokens tables page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the order tokens tables page
        
        report.addStep("Validate the heading of the order tokens tables page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the recived tokens button
    */
    async RecivedTokensButton(){
        
        await this.recivedTokensButton.click() //Clicking on the recived tokens button

        report.addStep("Click on the recived tokens button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the assigned tokens button
    */
    async AssignedTokensButton(){
        
        await this.assignedTokensButton.click() //Clicking on the assigned tokens button

        report.addStep("Click on the assigned tokens button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the inactive tokens table button
    */
    async InactiveTokensTableButton(){
        
        await this.inactiveTokensTableButton.click() //Clicking on the inactive tokens table button

        report.addStep("Click on the inactive tokens table button",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new OrderTokenTablesPage(); //This is for exporting the instance of OrderTokenTablesPage class