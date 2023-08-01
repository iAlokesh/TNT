const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const OrderTokenTablesPage = require('../pageobjects/OrderTokenTables.page') //This is for importing the instance of OrderTokenTablePage class
const ProductPage = require('../pageobjects/Product.page') //This is for importing the instance of ProductPage class
const CreateBulkTokensPage = require('../pageobjects/CreateBulkOrderTokens.page') //This is for importing the instance of CreateBulkTokensPage class
const DistributorPage = require('../pageobjects/Distributor.page') //This is for importing the instance of DistributorPage class
const CategoryPage = require('../pageobjects/Category.page') //This is for importing the instance of CategoryPage class
const SubCategoryPage = require('../pageobjects/SubCategory.page') //This is for importing the instance of SubCategoryPage class
const UploadBulkTokensPage = require('../pageobjects/UploadBulkData.page') //This is for importing the instance of UploadBulkTokensPage class
const DashboardTestdata = JSON.parse(fs.readFileSync('test/TestData/DashboardTestdata.json')) //This is for importing the instance of DashboardTestData

//const RetailerPage = require('../pageobjects/Retailer.page') //This is for importing the instance of RetailerPage class
describe('Dashboard', () => {

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
    });

    //This it block is excute for validate token count button
    it('TC_TrackNTrace_Dashboard_001_Validate token count button', async () => {
        report.addTestId(DashboardTestdata[0].TestCaseID)
        await DashboardPage.tokenCount()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product count button
    it('TC_TrackNTrace_Dashboard_002_Validate product count button', async () => {
        report.addTestId(DashboardTestdata[1].TestCaseID)
        await DashboardPage.productCount()
        await expect(browser).toHaveUrlContaining('product')
        await ProductPage.checkHeading('Product')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate blank token count button
    it('TC_TrackNTrace_Dashboard_003_Validate blank token count button', async () => {
        report.addTestId(DashboardTestdata[2].TestCaseID)
        await DashboardPage.blankTokenCount()
        await expect(browser).toHaveUrlContaining('publishBulkArt')
        await CreateBulkTokensPage.checkHeading('Create Bulk Tokens')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate distributor button
    it('TC_TrackNTrace_Dashboard_004_Validate distributor button', async () => {
        report.addTestId(DashboardTestdata[3].TestCaseID)
        await DashboardPage.distributor()
        await expect(browser).toHaveUrlContaining('distributer')
        await DistributorPage.checkHeading('Distributor Table')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate retailer button
    it.skip('TC_TrackNTrace_Dashboard_005_Validate retailer button', async () => {
        report.addTestId(DashboardTestdata[4].TestCaseID)
        await DashboardPage.retailer()
        await expect(browser).toHaveUrlContaining('')
        await RetailerPage.checkHeading('')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category bookmark
    it('TC_TrackNTrace_Dashboard_006_Validate category bookmark', async () => {
        report.addTestId(DashboardTestdata[5].TestCaseID)
        await DashboardPage.category()
        await expect(browser).toHaveUrlContaining('category')
        await CategoryPage.checkHeading('Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category bookmark
    it('TC_TrackNTrace_Dashboard_007_Validate sub-category bookmark', async () => {
        report.addTestId(DashboardTestdata[6].TestCaseID)
        await DashboardPage.subCategory()
        await expect(browser).toHaveUrlContaining('sub-category')
        await SubCategoryPage.checkHeading('Sub Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product bookmark
    it('TC_TrackNTrace_Dashboard_008_Validate product bookmark', async () => {
        report.addTestId(DashboardTestdata[7].TestCaseID)
        await DashboardPage.product()
        await expect(browser).toHaveUrlContaining('product')
        await ProductPage.checkHeading('Product')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate bulk tokens bookmarks
    it('TC_TrackNTrace_Dashboard_009_Validate create bulk tokens bookmark', async () => {
        report.addTestId(DashboardTestdata[8].TestCaseID)
        await DashboardPage.createBulkTokens()
        await expect(browser).toHaveUrlContaining('publishBulkArt')
        await CreateBulkTokensPage.checkHeading('Create Bulk Tokens')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate upload bulk tokens bookmark
    it('TC_TrackNTrace_Dashboard_010_Validate upload bulk tokens bookmark', async () => {
        report.addTestId(DashboardTestdata[9].TestCaseID)
        await DashboardPage.uploadBulkTokens()
        await expect(browser).toHaveUrlContaining('uploadBulkData')
        await UploadBulkTokensPage.checkHeading('Upload Bulk Data')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate track tokens bookmark
    it('TC_TrackNTrace_Dashboard_011_Validate track tokens bookmark', async () => {
        report.addTestId(DashboardTestdata[10].TestCaseID)
        await DashboardPage.trackTokens()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });
});    