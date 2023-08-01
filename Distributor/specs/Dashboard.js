const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobject/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobject/Dashboard.page') //This is for importing the instance of DashboardPage class
const OrderTokenTablesPage = require('../pageobject/OrderTokenTables.page') //This is for importing the instance OrderTokenTablesPage class
const DistributorPage = require('../pageobject/Distributors.page') //This is for importing the instance of DistributorPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/LoginTestdata.json')) //This for importing the instance of LoginData
const DashboardTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/DashboardTestdata.json')) //This is for importing the instance of DashboardTestData

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

    //This it block is excute for validate distributor button
    it('TC_TrackNTrace_Dashboard_004_Validate distributor button', async () => {
        report.addTestId(DashboardTestdata[3].TestCaseID)
        await DashboardPage.distributor()
        await expect(browser).toHaveUrlContaining('distributer')
        await DistributorPage.checkHeading('Distributor Table')
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
