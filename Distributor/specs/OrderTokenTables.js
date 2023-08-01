const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobject/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobject/Dashboard.page') //This is for importing the instance of DashboardPage class
const OrderTokenTablesPage = require('../pageobject/OrderTokenTables.page') //This is for importing the instance of OrderTokenTablesPage class
const ReceivedTokensPage = require('../pageobject/ReceivedTokens.page') //This is for importing the instance of ReceivedTokensPage class
const AssignedTokensPage = require('../pageobject/AssignedTokens.page') //This is for importing the instance of AssignedTokensPage class
const InactiveTokensTablePage = require('../pageobject/InactiveTokensTable.page') //This is for importing the instance of InactiveTokensTablePage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const OrderTokenTablesTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/OrderTokenTablesTestdata.json')) //This is for importing the instance of OrderTokenTablesTestdata

describe('Oredr Token Tables', () => {

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
        await browser.pause(1000)
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
    });

    //This it block is excute for validate order tokens tables button
    it('TC_TrackNTrace_OrderTokenTable_001_Validate order token tables button', async () => {
        report.addTestId(OrderTokenTablesTestdata[0].TestCaseID)
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });
});

describe('Received Tokens', () => {

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
        await browser.pause(1000)
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
    });

    //This it block is excute for validate expand rows button on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_002_Validate expand rows button on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[1].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate select rows button on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_003_Validate select rows button on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[2].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that retailer dropdown on the Recived Tokens Table has all retailer values
    it('TC_TrackNTrace_OrderTokenTable_004_Validate that retailer dropdown on the Received Tokens Table has all retailer values', async () => {
        report.addTestId(OrderTokenTablesTestdata[3].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.SelectRowsButton()
        await ReceivedTokensPage.RetailerDropdown()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate token id search box on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_006_Validate token id search box on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[5].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.TokenId(OrderTokenTablesTestdata[5].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_007_Validate batch no search box on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[6].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.BatchNo(OrderTokenTablesTestdata[6].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_008_Validate category search box on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[7].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.Category(OrderTokenTablesTestdata[7].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_009_Validate sub-category search box on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[8].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.SubCategory(OrderTokenTablesTestdata[8].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_010_Validate product search box on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[9].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.Product(OrderTokenTablesTestdata[9].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Recived Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_011_Validate AddTxn button on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[10].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Recived Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_012_Validate View button on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[11].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.ViewButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ViewTxn button on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_013_Validate ViewTxn button on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[12].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.ViewTxnButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate page box on the Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_014_Validate page box on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[13].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.PageValidation(OrderTokenTablesTestdata[13].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Recived Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_015_Validate show dropdown on the Received Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[14].TestCaseID)
        await ReceivedTokensPage.checkHeading('RECEIVED TOKENS')
        await ReceivedTokensPage.ShowValidation(OrderTokenTablesTestdata[14].Show)
        await DashboardPage.logout('Logout')
    });
});

describe('Assigned Tokens', () => {

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
        await browser.pause(1000)
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await OrderTokenTablesPage.AssignedTokensButton()
    });

    //This it block is excute for validate Assigned Tokens Table button
    it('TC_TrackNTrace_OrderTokenTable_016_Validate Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[15].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_017_Validate expand rows button on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[16].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate select rows button on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_018_Validate select rows button on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[17].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate token id search box on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_020_Validate token id search box on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[19].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.TokenId(OrderTokenTablesTestdata[19].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_021_Validate batch no search box on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[20].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.BatchNo(OrderTokenTablesTestdata[20].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_022_Validate category search box on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[21].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.Category(OrderTokenTablesTestdata[21].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_023_Validate sub-category search box on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[22].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.SubCategory(OrderTokenTablesTestdata[22].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_024_Validate product search box on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[23].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.Product(OrderTokenTablesTestdata[23].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Assigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_025_Validate AddTxn button on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[24].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Assigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_026_Validate View button on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[25].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.ViewButton()

        await DashboardPage.logout('Logout')
    }); 

    //This it block is excute for validate ViewTxn button on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_027_Validate ViewTxn button on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[26].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.ViewTxnButton()
        await DashboardPage.logout('Logout')
    });
 
    //This it block is excute for validate page box on the Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_028_Validate page box on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[27].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.PageValidation(OrderTokenTablesTestdata[27].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_029_Validate show dropdown on the Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[28].TestCaseID)
        await AssignedTokensPage.checkHeading('ASSIGNED TOKENS')
        await AssignedTokensPage.ShowValidation(OrderTokenTablesTestdata[28].Show)
        await DashboardPage.logout('Logout')
    });
});

describe.only('Inactive Tokens Table', () => {

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
        await browser.pause(1000)
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await OrderTokenTablesPage.InactiveTokensTableButton()
    });

    //This it block is excute for validate Inactive Tokens Table button
    it('TC_TrackNTrace_OrderTokenTable_030_Validate Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[29].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_031_Validate expand rows button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[30].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate select rows button on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_032_Validate select rows button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[31].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that retailer dropdown on the Recived Tokens Table has all retailer values
    it('TC_TrackNTrace_OrderTokenTable_033_Validate that retailer dropdown on the Inactive Tokens Table has all retailer values', async () => {
        report.addTestId(OrderTokenTablesTestdata[32].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.SelectRowsButton()
        await InactiveTokensTablePage.RetailerDropdown()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate token id search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_035_Validate token id search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[34].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.TokenId(OrderTokenTablesTestdata[34].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_036_Validate batch no search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[35].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.BatchNo(OrderTokenTablesTestdata[35].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_037_Validate category search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[36].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.Category(OrderTokenTablesTestdata[36].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_038_Validate sub-category search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[37].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.SubCategory(OrderTokenTablesTestdata[37].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_039_Validate product search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[38].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.Product(OrderTokenTablesTestdata[38].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Inactive Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_040_Validate AddTxn button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[39].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Inactive Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_041_Validate View button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[40].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ViewButton()

        await DashboardPage.logout('Logout')
    }); 

    //This it block is excute for validate ViewTxn button on the Inactive Tokens Table
    it.only('TC_TrackNTrace_OrderTokenTable_042_Validate ViewTxn button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[41].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ViewTxnButton()
        await DashboardPage.logout('Logout')
    });
 
    //This it block is excute for validate page box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_043_Validate page box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[42].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.PageValidation(OrderTokenTablesTestdata[42].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_044_Validate show dropdown on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[43].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ShowValidation(OrderTokenTablesTestdata[43].Show)
        await DashboardPage.logout('Logout')
    });
});