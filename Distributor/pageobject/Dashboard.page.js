const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class DashboardPage{

    //Web Locators

    get heading(){
        return $('h6.MuiTypography-root') //css for heading
    }

    get profileButton(){
        return $("button.css-148fdm8[type='button']") //css for profile button
    }

    get logoutButton(){
        return $('li.css-1km1ehz[tabindex="-1"]') //css for logout button
    }

    get tokenCountButton(){
        return $( "(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nb4dvr'])[1]") //xpath for token count button
    }

    get productCountButton(){
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nb4dvr'])[2]") //xpath for product count button
    }

    get blankTokenCountButton(){
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nb4dvr'])[3]") //xpath for blank token count button
    }

    get distributorButton(){
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nb4dvr'])[4]") //xpath for distributor button
    }

    get retailerButton(){
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-nb4dvr'])[5]") //xpath for retailer button
    }

    get categoryBookmark(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-idfda3'] a:nth-child(1)") //css for category bookmark
    }

    get subCategoryBookmark(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-idfda3'] a:nth-child(2)") //css for sub-category bookmark
    }

    get productBookmark(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-idfda3'] a:nth-child(3)") //css for product bookmark
    }

    get createBulkTokenBookmark(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-idfda3'] a:nth-child(4)") //css for create bulk token bookmark
    }

    get uploadBulkTokenBookmark(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-idfda3'] a:nth-child(5)") //css for upload bulk token bookmark
    }

    get trackTokensBookknark(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 css-idfda3'] a:nth-child(6)") //css for track tokens bookmark
    }

    get initiateWorkflowDropdown(){
        return $('a[href="/createWorkflow"]') //css for initiate workflow dropdown
    }

    get bulkOrderTokensDropdown(){
        return $("(//button[normalize-space()='Bulk Order Tokens'])[1]") //xpath for bulk order tokens dropdown
    }

    get createBulkOrderTokensDropdown(){
        return $('div[class="w3-dropdown-content w3-bar-block"]>a[href="/publishBulkArt"]') //css for create bulk order tokens dropdown
    }

    get uploadBulkDataDropsown(){
        return $('div[class="w3-dropdown-content w3-bar-block"]>a[href="/uploadBulkData"]') //css for upload bulk tokens dropdown
    }

    get orderTokenTablesDropdown(){
        return $('div[class="w3-sidebar w3-bar-block w3-card"]>a[href="/tokens"]') //css for order token tables
    }

    get distributorsDropdown(){
        return $('a[href="/distributer"]') //css for distributor dropdown
    }

    get retailers(){
        return $('a[href="/retailer"]') //css for retailers link
    }

    /*
    This method is to Validate the heading after login to the application in the dashboard page

    @param validationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading after login to the application in the dashboard page 

        report.addStep("Validate heading after login to the application in the dashboard page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for logout from the application

    @param validationMessage - message which needs to be validated should be passed
    */
    async logout(validationMessage){

        await this.profileButton.click() //Clicking on the profile button

        await expect(this.logoutButton).toHaveTextContaining(validationMessage) //validating the validation message for logout button

        await browser.pause(2000) //Pause browser 

        await this.logoutButton.click() //Clicking on the logout button

        report.addStep("Clicking on the logout button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the token count button
    */
    async tokenCount(){

        await this.tokenCountButton.click() //Clicking on the token count button

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the token count button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the product count button
    */
    async productCount(){

        await this.productCountButton.click() //Clicking on the product count button

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the product count button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the blank token count button
    */
    async blankTokenCount(){

        await this.blankTokenCountButton.click() //Clicking on the blank token count button

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the blank token count button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the distributor button
    */
    async distributor(){

        await this.distributorButton.click() //Clicking on the distributor button

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the distributor button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the retailer button
    */
    async retailer(){

        await this.retailerButton.click() //Clicking on the retailer button

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the retailer button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the category bookmark
    */
    async category(){

        await this.categoryBookmark.click() //Clicking on the category bookmark

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the category bookmark",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the sub-category bookmark
    */
    async subCategory(){

        await this.subCategoryBookmark.click() //Clicking on the sub-category bookmark

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the sub-category bookmark",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the product bookmark
    */
    async product(){

        await this.productBookmark.click() //Clicking on the product bookmark

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the product bookmark",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the create bulk tokens bookmark
    */
    async createBulkTokens(){

        await this.createBulkTokenBookmark.click() //Clicking on the create bulk tokens bookmark

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the create bulk tokens",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the upload bulk bookmark
    */
    async uploadBulkTokens(){

        await this.uploadBulkTokenBookmark.click() //Clicking on the upload bulk tokens bookmark

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the upload bulk tokens",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the track tokens bookmark
    */
    async trackTokens(){

        await this.trackTokensBookknark.click() //Clicking on the track tokens bookmark

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the track tokens",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the initiate workflow dropdown
    */
    async initiateWorkflow(){

        await this.initiateWorkflowDropdown.click() //Clicking on the initiate workflow dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the initiate workflow dropdown",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the bulk order tokens dropdown
    */
    async BulkOrderTokens(){

        await this.bulkOrderTokensDropdown.click() //Clicking on the bulk order tokens dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the bulk order tokens dropdown",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the create bulk order tokens dropdown
    */
    async CreateBulkOrderTokens(){

        await this.createBulkOrderTokensDropdown.click() //Clicking on the create bulk order tokens dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the create bulk order tokens dropdown",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the upload bulk data dropdown
    */
    async UploadBulkData(){

        await this.uploadBulkDataDropsown.click() //Clicking on the upload bulk data dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the upload bulk data dropdown",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the order token tables dropdown
    */
    async OrderTokenTables(){

        await this.orderTokenTablesDropdown.click() //Clicking on the bulk order tokens dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the order token tables dropdown",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on distributors dropdown
    */
    async Distributor(){

        await this.distributorsDropdown.click() //Clicking on the distributors dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the distributors dropdown",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on retailes link
    */
    async Retailers(){

        await this.retailers.click() //Clicking on the retailers 

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the retailers",await browser.takeScreenshot(), "passed")
    }
}
module.exports = new DashboardPage(); //This is for exporting the instance of DashboardPage class