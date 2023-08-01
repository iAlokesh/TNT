const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobject/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobject/Dashboard.page') //This is for importing the instance of DashboardPage class
const RetailerPage = require('../pageobject/Retailer.page') //This is for importing the instance of RetailerPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const RetailersTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/RetailersTestdata.json')) //This is for importing the instance of RetailersTestData

describe('Retailers', () => {

    //This will execute before each test
    beforeEach(async () => {
        await browser.url("https://trackandtracee.azurewebsites.net/")
        await expect(browser).toHaveUrlContaining('trackandtrace')
        await browser.pause(1000)
        await browser.maximizeWindow()
        await LoginPage.login(LoginTestdata[0].email, LoginTestdata[0].password)
        await expect(browser).toHaveUrlContaining('dashboard')
        await browser.pause(1000)
        await DashboardPage.checkHeading('Track & Trace')
        await browser.pause(1000)
        await DashboardPage.Retailers()
        await expect(browser).toHaveUrlContaining('retailer')
        await RetailerPage.checkHeading('Retailer Table')
    });

    //This it block is excute for validate Retailers button
    it.only('TC_TrackNTrace_Retailers_001_Validate Retailers button', async () => {
        report.addTestId(RetailersTestdata[0].TestCaseID)
        await RetailerPage.checkHeading('Retailer Table')
        await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate ADD NEW button
    it('TC_TrackNTrace_Retailers_002_Validate ADD NEW button', async () => {
        report.addTestId(RetailersTestdata[1].TestCaseID)
        await RetailerPage.checkHeading('Retailer Table')
        await RetailerPage.AddNew()
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for Validate ADD NEW on the Retailers page
    it('TC_TrackNTrace_Retailers_003_Validate ADD NEW on the Retailers page', async () => {
        report.addTestId(RetailersTestdata[2].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[2].firstName)
        await RetailerPage.LastName(RetailersTestdata[2].lastName)
        await RetailerPage.Email(RetailersTestdata[2].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[2].phoneNumber)
        await RetailerPage.State(RetailersTestdata[2].states)
        await RetailerPage.Submit()
        await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate that State/UT dropdown has valid values in the ADD NEW button on the Retailers page
    it('TC_TrackNTrace_Retailers_004_Validate that State/UT dropdown has valid values', async () => {
        report.addTestId(RetailersTestdata[3].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.StateHasValidValues()
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate that first name field is mandatory
    it('TC_TrackNTrace_Retailers_005_Validate that first name field is mandatory', async () => {
        report.addTestId(RetailersTestdata[4].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.LastName(RetailersTestdata[4].lastName)
        await RetailerPage.Email(RetailersTestdata[4].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[4].phoneNumber)
        await RetailerPage.State(RetailersTestdata[4].states)
        await RetailerPage.Submit()
        await RetailerPage.FirstNameValidation('First name is required')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that last name field is mandatory
    it('TC_TrackNTrace_Retailers_006_Validate that last name field is mandatory', async () => {
        report.addTestId(RetailersTestdata[5].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[5].firstName)
        await RetailerPage.Email(RetailersTestdata[5].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[5].phoneNumber)
        await RetailerPage.State(RetailersTestdata[5].states)
        await RetailerPage.Submit()
        await RetailerPage.LastNameValidation('Last name is required')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that email field is mandatory
    it('TC_TrackNTrace_Retailers_007_Validate that email field is mandatory', async () => {
        report.addTestId(RetailersTestdata[6].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[6].firstName)
        await RetailerPage.LastName(RetailersTestdata[6].lastName)
        await RetailerPage.PhoneNumber(RetailersTestdata[6].phoneNumber)
        await RetailerPage.State(RetailersTestdata[6].states)
        await RetailerPage.Submit()
        await RetailerPage.EmailValidation('Email is required')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that phone number field is mandatory
    it('TC_TrackNTrace_Retailers_008_Validate that phone number field is mandatory', async () => {
        report.addTestId(RetailersTestdata[7].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[7].firstName)
        await RetailerPage.LastName(RetailersTestdata[7].lastName)
        await RetailerPage.Email(RetailersTestdata[7].email)
        await RetailerPage.State(RetailersTestdata[7].states)
        await RetailerPage.Submit()
        await RetailerPage.PhoneNumberValidation('Phone Number is required')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that state field is mandatory
    it('TC_TrackNTrace_Retailers_009_Validate that state field is mandatory', async () => {
        report.addTestId(RetailersTestdata[8].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[8].firstName)
        await RetailerPage.LastName(RetailersTestdata[8].lastName)
        await RetailerPage.Email(RetailersTestdata[8].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[8].phoneNumber)
        await RetailerPage.Submit()
        await RetailerPage.StateValidation('State is required')
        await RetailerPage.Cancel() 
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that first name is not accepting special character or number
    it('TC_TrackNTrace_Retailers_010_Validate that first name is not accepting special character or number', async () => {
        report.addTestId(RetailersTestdata[9].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[9].firstName)
        await RetailerPage.LastName(RetailersTestdata[9].lastName)
        await RetailerPage.Email(RetailersTestdata[9].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[9].phoneNumber)
        await RetailerPage.State(RetailersTestdata[9].states)
        await RetailerPage.Submit()
        await RetailerPage.FirstNameAlphabetsValidation('Only alphabets are allowed for this field')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that last name is not accepting special character or number
    it('TC_TrackNTrace_Retailers_011_Validate that last name is not accepting special character or number', async () => {
        report.addTestId(RetailersTestdata[10].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[10].firstName)
        await RetailerPage.LastName(RetailersTestdata[10].lastName)
        await RetailerPage.Email(RetailersTestdata[10].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[10].phoneNumber)
        await RetailerPage.State(RetailersTestdata[10].states)
        await RetailerPage.Submit()
        await RetailerPage.LastNameAlphabetsValidation('Only alphabets are allowed for this field')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that email must be a valid email address
    it('TC_TrackNTrace_Retailers_012_Validate that email must be a valid email address', async () => {
        report.addTestId(RetailersTestdata[11].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[11].firstName)
        await RetailerPage.LastName(RetailersTestdata[11].lastName)
        await RetailerPage.Email(RetailersTestdata[11].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[11].phoneNumber)
        await RetailerPage.State(RetailersTestdata[11].states)
        await RetailerPage.Submit()
        await RetailerPage.ValidateEmailValidation('Email must be a valid email address')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that phone number must be of 10 digits
    it('TC_TrackNTrace_Retailers_013_Validate that phone number must be of 10 digits', async () => {
        report.addTestId(RetailersTestdata[12].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.FirstName(RetailersTestdata[12].firstName)
        await RetailerPage.LastName(RetailersTestdata[12].lastName)
        await RetailerPage.Email(RetailersTestdata[12].email)
        await RetailerPage.PhoneNumber(RetailersTestdata[12].phoneNumber)
        await RetailerPage.State(RetailersTestdata[12].states)
        await RetailerPage.Submit()
        await RetailerPage.PhoneNumberTenDigitsValidation('Phone Number must be of 10 Digits')
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate CANCEL button
    it('TC_TrackNTrace_Retailers_014_Validate CANCEL button', async () => {
        report.addTestId(RetailersTestdata[13].TestCaseID)
        await RetailerPage.AddNew()
        await RetailerPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button
    it('TC_TrackNTrace_Retailers_015_Validate expand rows button', async () => { 
        report.addTestId(RetailersTestdata[14].TestCaseID)
        await RetailerPage.ExpandButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate first name search box on the retailer table   
    it("TC_TrackNTrace_Retailers_016_Validate first name search box on the retailer table", async () => {
        report.addTestId(RetailersTestdata[15].TestCaseID)
        await RetailerPage.FirstNameSearchboxValidation(RetailersTestdata[15].firstName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate last name search box on the retailer table 
    it("TC_TrackNTrace_Retailers_017_Validate last name search box on the retailer table", async () => {
        report.addTestId(RetailersTestdata[16].TestCaseID)
        await RetailerPage.LastNameSearchboxValidation(RetailersTestdata[16].lastName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate email id search box on the retailer table
    it("TC_TrackNTrace_Retailers_018_Validate email id search box on the retailer table", async () => {
        report.addTestId(RetailersTestdata[17].TestCaseID)
        await RetailerPage.EmailIdSearchboxValidation(RetailersTestdata[17].emailId)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate phone number search box on the retailer table
    it("TC_TrackNTrace_Retailers_019_Validate phone number search box on the retailer table", async () => {
        report.addTestId(RetailersTestdata[18].TestCaseID)
        await RetailerPage.PhoneNumberSearchboxValidation(RetailersTestdata[18].phoneNumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate state dropdown search on the retailer table
    it("TC_TrackNTrace_Retailers_020_Validate state dropdown search on the retailer table", async () => {
        report.addTestId(RetailersTestdata[19].TestCaseID)
        await RetailerPage.StateDropdownValidation(RetailersTestdata[19].stateName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate zone dropdown search on the retailer table
    it("TC_TrackNTrace_Retailers_021_Validate zone dropdown search on the retailer table", async () => {
        report.addTestId(RetailersTestdata[20].TestCaseID)
        await RetailerPage.ZoneDropdownValidation(RetailersTestdata[20].zoneName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that state dropdown on the retailer Table has valid values
    it('TC_TrackNTrace_Retailers_022_Validate that state dropdown on the retailer Table has valid values', async () => {
        report.addTestId(RetailersTestdata[21].TestCaseID)
        await RetailerPage.StateSearchHasValidValues()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate zone dropdown the retailer table has valid values
    it('TC_TrackNTrace_Retailers_023_Validate Zone dropdown on the retailers table has valid values', async () => {
        report.addTestId(RetailersTestdata[22].TestCaseID)
        await RetailerPage.ZoneHasValidValues()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate page box
    it('TC_TrackNTrace_Retailers_024_Validate page box', async () => {
        report.addTestId(RetailersTestdata[23].TestCaseID)
        await RetailerPage.PageValidation(RetailersTestdata[24].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown
    it('TC_TrackNTrace_Retailers_025_Validate show dropdown', async () => {
        report.addTestId(RetailersTestdata[24].TestCaseID)
        await RetailerPage.ShowValidation(RetailersTestdata[24].Show)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown has valid values
    it('TC_TrackNTrace_Retailers_026_Validate show dropdown has valid values', async () => {
        report.addTestId(RetailersTestdata[25].TestCaseID)
        await RetailerPage.ShowHasValidValues()
        await DashboardPage.logout('Logout')
    });
});
