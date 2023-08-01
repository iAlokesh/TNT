const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const FilledUnassignedTokensPage = require('../pageobjects/FilledUnassignedTokens.page') //This is for importing the instance of FilledUnassignedTokensPage class
const CreateBulkOrderTokensPage = require('../pageobjects/CreateBulkOrderTokens.page') //This is for importing the instance of CreateBulkTokensPage class
const UploadBulkDataPage = require('../pageobjects/UploadBulkData.page') //This is for importing the instance of UploadBulkDataPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const BulkOrderTokensTestdata = JSON.parse(fs.readFileSync('test/TestData/BulkOrderTokensTestdata.json')) //This is for importing the instance of BulkOrderTokensTestdata

describe.skip('Create Bulk Order Tokens', () => {

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
        await DashboardPage.BulkOrderTokens()
        await browser.pause(1000)
        await DashboardPage.CreateBulkOrderTokens()
        await expect(browser).toHaveUrlContaining('publishBulkArt')
    });

    //This it block is excute for validate create bulk order tokens button
    it('TC_TrackNTrace_BulkOrderTokens_001_Validate create bulk order tokens button', async () => {
       report.addTestId(BulkOrderTokensTestdata[0].TestCaseID)
       await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
       await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate Reset button
    it('TC_TrackNTrace_BulkOrderTokens_002_Validate reset button', async () => {
       report.addTestId(BulkOrderTokensTestdata[1].TestCaseID)
       await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
       await CreateBulkOrderTokensPage.BulkTokenNumber(BulkOrderTokensTestdata[1].token)
       await CreateBulkOrderTokensPage.ResetButton()
       await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate Submit button
    it.skip('TC_TrackNTrace_BulkOrderTokens_003_Validate Submit button', async () => {
        report.addTestId(BulkOrderTokensTestdata[2].TestCaseID)
        await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
        await CreateBulkOrderTokensPage.BulkTokenNumber(BulkOrderTokensTestdata[2].token)
        await CreateBulkOrderTokensPage.SubmitButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate Qucik Action (Add Token Buttons)
    it('TC_TrackNTrace_BulkOrderTokens_004_Validate Quick Action (Add Token Buttons)', async () => {
        report.addTestId(BulkOrderTokensTestdata[3].TestCaseID)
        await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
        await CreateBulkOrderTokensPage.QuickActionButtons(BulkOrderTokensTestdata[3].ActionButtons)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate Bulk Token Number text box with decimal number
    it('TC_TrackNTrace_BulkOrderTokens_005_Validate Bulk Token Number text box with decimal number', async () => {
        report.addTestId(BulkOrderTokensTestdata[4].TestCaseID)
       await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
       await CreateBulkOrderTokensPage.BulkTokenNumber(BulkOrderTokensTestdata[4].token)
       await CreateBulkOrderTokensPage.SubmitButton()
       await CreateBulkOrderTokensPage.BulkTokenTextboxValidation(BulkOrderTokensTestdata[4].validationMessage)
       await CreateBulkOrderTokensPage.CloseButton()
       await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate Bulk Token Number text box without passing any number
    it.skip('TC_TrackNTrace_BulkOrderTokens_006_Validate Bulk Token Number text box without passing any number', async () => {
        report.addTestId(BulkOrderTokensTestdata[5].TestCaseID)
       await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
       await CreateBulkOrderTokensPage.BulkTokenNumber(BulkOrderTokensTestdata[5].token)
       await CreateBulkOrderTokensPage.SubmitButton()
       
       await DashboardPage.logout('Logout')
    });
});

describe.only('Upload Bulk Data', () => {

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
        await DashboardPage.BulkOrderTokens()
        await browser.pause(1000)
        await DashboardPage.UploadBulkData()
        await expect(browser).toHaveUrlContaining('uploadBulkData')
    });

    //This it block is excute for validate upload bulk data button
    it('TC_TrackNTrace_BulkOrderTokens_007_Validate upload bulk data button', async () => {
       report.addTestId(BulkOrderTokensTestdata[6].TestCaseID)
       await UploadBulkDataPage.checkHeading('Upload Bulk Data')
       await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate RESET button
    it('TC_TrackNTrace_BulkOrderTokens_008_Validate RESET button', async () => {
       report.addTestId(BulkOrderTokensTestdata[7].TestCaseID)
       await UploadBulkDataPage.checkHeading('Upload Bulk Data')
       await UploadBulkDataPage.EnterBulkNumber(BulkOrderTokensTestdata[7].bulkNumber)
       await UploadBulkDataPage.Category(BulkOrderTokensTestdata[7].categoryName)
       //await UploadBulkDataPage.SubCategory(BulkOrderTokensTestdata[7].subcategoryName)
       //await UploadBulkDataPage.Product(BulkOrderTokensTestdata[7].productName)
       await UploadBulkDataPage.ResetButton()
       await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate GO BACK button
    it('TC_TrackNTrace_BulkOrderTokens_009_Validte GO BACK button', async () => {
       report.addTestId(BulkOrderTokensTestdata[8].TestCaseID)
       await UploadBulkDataPage.checkHeading('Upload Bulk Data')
       await UploadBulkDataPage.GoBackButton()
       await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
       await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate CSV UPLOAD HISTORY button
    it('TC_TrackNTrace_BulkOrderTokens_010_Validate CSV UPLOAD HISTORY button', async () => {
        report.addTestId(BulkOrderTokensTestdata[9].TestCaseID)
        await UploadBulkDataPage.checkHeading('Upload Bulk Data')
        await UploadBulkDataPage.CsvUploadHistory()
        await UploadBulkDataPage.UploadedCsvFileHistory('Uploaded CSV File History')
        await UploadBulkDataPage.CloseHistory()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate SELECT CSV FILE button
    it.skip('TC_TrackNTrace_BulkOrderTokens_011_Validate SELECT CSV FILE button', async () => {
        report.addTestId(BulkOrderTokensTestdata[10].TestCaseID)
        await UploadBulkDataPage.checkHeading('Upload Bulk Data')
        await UploadBulkDataPage.SELECT_CSV_FILE()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate IMPORT CSV button
    it.skip('TC_TrackNTrace_BulkOrderTokens_012_Validate IMPORT CSV button', async () => {
        report.addTestId(BulkOrderTokensTestdata[11].TestCaseID)
        await UploadBulkDataPage.checkHeading('Upload Bulk Data')
        await UploadBulkDataPage.SELECT_CSV_FILE()
        await UploadBulkDataPage.ImportCsvButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DOWNLOAD CSV button
    it.only('TC_TrackNTrace_BulkOrderTokens_013_Validate DOWNLOAD CSV button', async () => {
        report.addTestId(BulkOrderTokensTestdata[12].TestCaseID)
        await UploadBulkDataPage.checkHeading('Upload Bulk Data')
        await UploadBulkDataPage.EnterBulkNumber(BulkOrderTokensTestdata[12].bulkNumber)
        await UploadBulkDataPage.Category(BulkOrderTokensTestdata[12].categoryName)
        await UploadBulkDataPage.SubCategory(BulkOrderTokensTestdata[12].subcategoryName)
        await UploadBulkDataPage.Product(BulkOrderTokensTestdata[12].productName)
        //await UploadBulkDataPage.DOWNLOAD_CSVButton()
        await DashboardPage.logout('Logout')
    });
});
