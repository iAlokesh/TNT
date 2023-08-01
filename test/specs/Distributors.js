const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const DistributorPage = require('../pageobjects/Distributor.page') //This is for importing the instance of DistributorPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const DistributorsTestdata = JSON.parse(fs.readFileSync('test/TestData/DistributorsTestdata.json')) //This is for importing the instance of DistributorsTestData

describe('Distributors', () => {

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
        await DashboardPage.Distributor()
        await expect(browser).toHaveUrlContaining('distributer')
    });

    //This it block is excute for validate distributors button
    it('TC_TrackNTrace_Distributors_001_Validate disributors button', async () => {
        report.addTestId(DistributorsTestdata[0].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate ADD NEW button
    it('TC_TrackNTrace_Distributors_002_Validate ADD NEW button', async () => {
        report.addTestId(DistributorsTestdata[1].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for Validate ADD NEW on the distributors page
    it('TC_TrackNTrace_Distributors_003_Validate ADD NEW on the distributors page', async () => {
        report.addTestId(DistributorsTestdata[2].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[2].firstName)
        await DistributorPage.LastName(DistributorsTestdata[2].lastName)
        await DistributorPage.Email(DistributorsTestdata[2].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[2].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[2].states)
        await DistributorPage.Submit()
        await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate that State/UT dropdown has valid values in the ADD NEW button on the distributors page
    it('TC_TrackNTrace_Distributors_004_Validate that State/UT dropdown has valid values', async () => {
        report.addTestId(DistributorsTestdata[3].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.StateHasValidValues()
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate that first name field is mandatory
    it('TC_TrackNTrace_Distributors_005_Validate that first name field is mandatory', async () => {
        report.addTestId(DistributorsTestdata[4].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.LastName(DistributorsTestdata[4].lastName)
        await DistributorPage.Email(DistributorsTestdata[4].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[4].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[4].states)
        await DistributorPage.Submit()
        await DistributorPage.FirstNameValidation('First name is required')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that last name field is mandatory
    it('TC_TrackNTrace_Distributors_006_Validate that last name field is mandatory', async () => {
        report.addTestId(DistributorsTestdata[5].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[5].firstName)
        await DistributorPage.Email(DistributorsTestdata[5].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[5].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[5].states)
        await DistributorPage.Submit()
        await DistributorPage.LastNameValidation('Last name is required')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that email field is mandatory
    it('TC_TrackNTrace_Distributors_007_Validate that email field is mandatory', async () => {
        report.addTestId(DistributorsTestdata[6].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[6].firstName)
        await DistributorPage.LastName(DistributorsTestdata[6].lastName)
        await DistributorPage.PhoneNumber(DistributorsTestdata[6].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[6].states)
        await DistributorPage.Submit()
        await DistributorPage.EmailValidation('Email is required')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that phone number field is mandatory
    it('TC_TrackNTrace_Distributors_008_Validate that phone number field is mandatory', async () => {
        report.addTestId(DistributorsTestdata[7].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[7].firstName)
        await DistributorPage.LastName(DistributorsTestdata[7].lastName)
        await DistributorPage.Email(DistributorsTestdata[7].email)
        await DistributorPage.State(DistributorsTestdata[7].states)
        await DistributorPage.Submit()
        await DistributorPage.PhoneNumberValidation('Phone Number is required')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that state field is mandatory
    it('TC_TrackNTrace_Distributors_009_Validate that state field is mandatory', async () => {
        report.addTestId(DistributorsTestdata[8].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[8].firstName)
        await DistributorPage.LastName(DistributorsTestdata[8].lastName)
        await DistributorPage.Email(DistributorsTestdata[8].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[8].phoneNumber)
        await DistributorPage.Submit()
        await DistributorPage.StateValidation('State is required')
        await DistributorPage.Cancel() 
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that first name is not accepting special character or number
    it('TC_TrackNTrace_Distributors_010_Validate that first name is not accepting special character or number', async () => {
        report.addTestId(DistributorsTestdata[9].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[9].firstName)
        await DistributorPage.LastName(DistributorsTestdata[9].lastName)
        await DistributorPage.Email(DistributorsTestdata[9].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[9].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[9].states)
        await DistributorPage.Submit()
        await DistributorPage.FirstNameAlphabetsValidation('Only alphabets are allowed for this field')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that last name is not accepting special character or number
    it('TC_TrackNTrace_Distributors_011_Validate that last name is not accepting special character or number', async () => {
        report.addTestId(DistributorsTestdata[10].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[10].firstName)
        await DistributorPage.LastName(DistributorsTestdata[10].lastName)
        await DistributorPage.Email(DistributorsTestdata[10].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[10].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[10].states)
        await DistributorPage.Submit()
        await DistributorPage.LastNameAlphabetsValidation('Only alphabets are allowed for this field')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that email must be a valid email address
    it('TC_TrackNTrace_Distributors_012_Validate that email must be a valid email address', async () => {
        report.addTestId(DistributorsTestdata[11].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[11].firstName)
        await DistributorPage.LastName(DistributorsTestdata[11].lastName)
        await DistributorPage.Email(DistributorsTestdata[11].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[11].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[11].states)
        await DistributorPage.Submit()
        await DistributorPage.ValidateEmailValidation('Email must be a valid email address')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that phone number must be of 10 digits
    it('TC_TrackNTrace_Distributors_013_Validate that phone number must be of 10 digits', async () => {
        report.addTestId(DistributorsTestdata[12].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.FirstName(DistributorsTestdata[12].firstName)
        await DistributorPage.LastName(DistributorsTestdata[12].lastName)
        await DistributorPage.Email(DistributorsTestdata[12].email)
        await DistributorPage.PhoneNumber(DistributorsTestdata[12].phoneNumber)
        await DistributorPage.State(DistributorsTestdata[12].states)
        await DistributorPage.Submit()
        await DistributorPage.PhoneNumberTenDigitsValidation('Phone Number must be of 10 Digits')
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate CANCEL button
    it('TC_TrackNTrace_Distributors_014_Validate CANCEL button', async () => {
        report.addTestId(DistributorsTestdata[13].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.AddNew()
        await DistributorPage.Cancel()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button
    it('TC_TrackNTrace_Distributors_015_Validate expand rows button', async () => { 
        report.addTestId(DistributorsTestdata[14].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.ExpandButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate first name search box on the distributor table   
    it("TC_TrackNTrace_Distributors_016_Validate first name search box on the distributor table", async () => {
        report.addTestId(DistributorsTestdata[15].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.FirstNameSearchboxValidation(DistributorsTestdata[15].firstName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate last name search box on the distributor table 
    it("TC_TrackNTrace_Distributors_017_Validate last name search box on the distributor table", async () => {
        report.addTestId(DistributorsTestdata[16].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.LastNameSearchboxValidation(DistributorsTestdata[16].lastName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate email id search box on the distributor table
    it("TC_TrackNTrace_Distributors_018_Validate email id search box on the distributor table", async () => {
        report.addTestId(DistributorsTestdata[17].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.EmailIdSearchboxValidation(DistributorsTestdata[17].emailId)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate phone number search box on the distributor table
    it("TC_TrackNTrace_Distributors_019_Validate phone number search box on the distributor table", async () => {
        report.addTestId(DistributorsTestdata[18].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.PhoneNumberSearchboxValidation(DistributorsTestdata[18].phoneNumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate state dropdown search on the distributor table
    it("TC_TrackNTrace_Distributors_020_Validate state dropdown search on the distributor table", async () => {
        report.addTestId(DistributorsTestdata[19].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.StateDropdownValidation(DistributorsTestdata[19].stateName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate zone dropdown search on the distributor table
    it("TC_TrackNTrace_Distributors_021_Validate zone dropdown search on the distributor table", async () => {
        report.addTestId(DistributorsTestdata[20].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.ZoneDropdownValidation(DistributorsTestdata[20].zoneName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that state dropdown on the Distributor Table has valid values
    it('TC_TrackNTrace_Distributors_022_Validate that state dropdown on the Distributor Table has valid values', async () => {
        report.addTestId(DistributorsTestdata[21].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.StateSearchHasValidValues()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate zone dropdown the distributor table has valid values
    it('TC_TrackNTrace_Distributors_023_Validate Zone dropdown on the Distributors table has valid values', async () => {
        report.addTestId(DistributorsTestdata[22].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.ZoneHasValidValues()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate page box
    it('TC_TrackNTrace_Distributors_024_Validate page box', async () => {
        report.addTestId(DistributorsTestdata[23].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.PageValidation(DistributorsTestdata[24].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown
    it('TC_TrackNTrace_Distributors_025_Validate show dropdown', async () => {
        report.addTestId(DistributorsTestdata[24].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.ShowValidation(DistributorsTestdata[24].Show)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown has valid values
    it('TC_TrackNTrace_Distributors_026_Validate show dropdown has valid values', async () => {
        report.addTestId(DistributorsTestdata[25].TestCaseID)
        await DistributorPage.checkHeading('Distributor Table')
        await DistributorPage.ShowHasValidValues()
        await DashboardPage.logout('Logout')
    });
});