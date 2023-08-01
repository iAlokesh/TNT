const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class OrderTokenTablesPage{

    //Web Locators

    get heading(){
        return $('li>a[aria-current="page"]') //css for heading the tokens page
    }

    get filledUnassignedTokensButton(){
        return $('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-1pzhvqo"]>span:nth-child(4)>button') //css for filled unassigned tokens button
    }

    get filledAssignedTokensButton(){
        return $('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-1pzhvqo"]>span:nth-child(3)>button') //css for filled assigned tokens button
    }

    get inactiveTokensTableButton(){
        return $('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-1pzhvqo"]>span:nth-child(2)>button') //css for inactive tokens table button
    }

    get blankTokensTableButton(){
        return $('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-1pzhvqo"]>span:nth-child(1)>button') //css for blank tokens table button
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
    This method is for clicking on the fill unassigned tokens button
    */
    async FilledUnassignedTokensButton(){
        
        await this.filledUnassignedTokensButton.click() //Clicking on the filled unassigned tokens button

        report.addStep("Click on the filled unassigned tokens button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the filled assigned tokens button
    */
    async FilledAssignedTokensButton(){

        await this.filledAssignedTokensButton.click() //Clicking on the filled assigned tokens button

        report.addStep("Click on the filled assigned tokens button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the inactive tokens table button
    */
    async InactiveTokensTableButton(){

        await this.inactiveTokensTableButton.click() //Clicking on the inactive tokens table button

        report.addStep("Click on the inactive tokens table button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the blank tokens table button
    */
    async BlankTokensTableButton(){

        await this.blankTokensTableButton.click() //Clicking on the blank tokens table button

        report.addStep("Click on the blank tokens table button",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new OrderTokenTablesPage(); //This is for exporting the instance of OrderTokenTablesPage class