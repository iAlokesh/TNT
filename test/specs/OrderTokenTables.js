const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const OrderTokenTablesPage = require('../pageobjects/OrderTokenTables.page') //This is for importing the instance of OrderTokenTablesPage class 
const FilledUnassignedTokensPage = require('../pageobjects/FilledUnassignedTokens.page') //This is for importing the instance of FilledUnassignedTokensPage class 
const FilledAssignedTokensPage = require('../pageobjects/FilledAssignedTokens.page') //This is for importing the instance of FilledAssignedTokensPage class
const InactiveTokensTablePage = require('../pageobjects/InactiveTokensTable.page') //This is for importing the instance of InactiveTokensTablePage class
const BlankTokensTablePage  = require('../pageobjects/BlankTokensTable.page') //This is for importing the instance of BlankTokensTablePage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const OrderTokenTablesTestdata = JSON.parse(fs.readFileSync('test/TestData/OrderTokenTablesTestdata.json')) //This is for importing the instance of OrderTokenTablesTestdata

describe.skip('Order Tokens Tables', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
    });

    //This it block is excute for validate order tokens tables button
    it('TC_TrackNTrace_OrderTokenTable_001_Validate order tokens tables button', async () => {
        report.addTestId(OrderTokenTablesTestdata[0].TestCaseID)
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });
});

describe.skip('Filled Unassigned Tokens', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
    });

    //This it block is excute for validate expand rows button on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_002_Validate expand rows button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[1].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate select rows button on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_003_Validate select rows button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[2].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that distributor dropdown on the Filled unassigned Tokens Table has all unassigned values
    it('TC_TrackNTrace_OrderTokenTable_004_Validate that distributor dropdown on the Filled unassigned Tokens Table has all unassigned values', async () => {
        report.addTestId(OrderTokenTablesTestdata[3].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.SelectRowsButton()
        await FilledUnassignedTokensPage.DistributorDropdown()
        await DashboardPage.logout('Logout')
    });

    
    //This it block is excute for validate token id search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_006_Validate token id search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[5].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.TokenId(OrderTokenTablesTestdata[5].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_007_Validate batch no search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[6].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.BatchNo(OrderTokenTablesTestdata[6].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_008_Validate category search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[7].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.Category(OrderTokenTablesTestdata[7].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_009_Validate sub-category search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[8].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.SubCategory(OrderTokenTablesTestdata[8].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_010_Validate product search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[9].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.Product(OrderTokenTablesTestdata[9].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Filled unassigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_011_Validate AddTxn button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[10].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Filled unassigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_012_Validate View button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[11].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ViewButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ViewTxn button on the Filled unassigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_013_Validate ViewTxn button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[12].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ViewTxnButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate page box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_014_Validate page box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[13].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.PageValidation(OrderTokenTablesTestdata[13].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_015_Validate show dropdown on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[14].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ShowValidation(OrderTokenTablesTestdata[14].Show)
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate show dropdown has valid values on filled unassigned tokens table
    it('TC_TrackNTrace_OrderTokenTable_016_Validate show dropdown has valid values on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[15].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ShowHasValidValues()
        await DashboardPage.logout('Logout')
    });
});

describe.only('Filled Assigned Tokens', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await OrderTokenTablesPage.FilledAssignedTokensButton()
    });

    //This it block is excute for validate Filled Assigned Tokens Table button
    it('TC_TrackNTrace_OrderTokenTable_017_Validate Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[16].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_018_Validate expand rows button on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[17].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate select rows button on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_019_Validate select rows button on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[18].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate token id search box on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_021_Validate token id search box on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[20].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.TokenId(OrderTokenTablesTestdata[20].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_022_Validate batch no search box on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[21].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.BatchNo(OrderTokenTablesTestdata[21].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_023_Validate category search box on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[22].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.Category(OrderTokenTablesTestdata[22].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_024_Validate sub-category search box on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[23].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.SubCategory(OrderTokenTablesTestdata[23].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_025_Validate product search box on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[24].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.Product(OrderTokenTablesTestdata[24].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Filled Assigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_026_Validate AddTxn button on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[25].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Filled Assigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_027_Validate View button on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[26].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.ViewButton()

        await DashboardPage.logout('Logout')
    }); 

    //This it block is excute for validate ViewTxn button on the Filled Assigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_028_Validate ViewTxn button on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[27].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.ViewTxnButton()
        await DashboardPage.logout('Logout')
    });
 
    //This it block is excute for validate page box on the Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_030_Validate page box on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[29].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.PageValidation(OrderTokenTablesTestdata[29].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_031_Validate show dropdown on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[30].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.ShowValidation(OrderTokenTablesTestdata[30].Show)
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate show dropdown has valid values on Filled Assigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_032_Validate show dropdown has valid values on the Filled Assigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[31].TestCaseID)
        await FilledAssignedTokensPage.checkHeading('FILLED ASSIGNED TOKENS')
        await FilledAssignedTokensPage.ShowHasValidValues()
        await DashboardPage.logout('Logout')
    });
});    

describe.skip('Blank Tokens Table', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await OrderTokenTablesPage.BlankTokensTableButton()
    });

    //This it block is excute for validate Blank Tokens Table button
    it('TC_TrackNTrace_OrderTokenTable_033_Validate Blank Tokens Table button', async () => {
        report.addTestId(OrderTokenTablesTestdata[32].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button on the Blank Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_034_Validate expand rows on the Blank Tokens Table button', async () => {
        report.addTestId(OrderTokenTablesTestdata[33].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await BlankTokensTablePage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate token id search box on the Blank Tokens Table
    it('TC_TrackNTrace_OrderTokensTable_035_Validate token id search box on the Blank Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[34].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await BlankTokensTablePage.TokenId(OrderTokenTablesTestdata[34].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate Add button on the Blank Tokens Table
    it('TC_TrackNTrace_OrderTokensTable_036_Validate Add button on the Blank Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[35].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await BlankTokensTablePage.AddButton() 
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate page box on the Blank Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_037_Validate page box on the Blank Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[36].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await BlankTokensTablePage.PageValidation(OrderTokenTablesTestdata[36].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Blank Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_038_Validate show dropdown on the Blank Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[37].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await BlankTokensTablePage.ShowValidation(OrderTokenTablesTestdata[37].Show)
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate show dropdown has valid values on Blank Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_039_Validate show dropdown has valid values on the Blank Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[38].TestCaseID)
        await BlankTokensTablePage.checkHeading('BLANK TOKENS')
        await BlankTokensTablePage.ShowHasValidValues()
        await DashboardPage.logout('Logout')
    });
});    

describe.skip('Inactive Tokens Table', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await OrderTokenTablesPage.InactiveTokensTableButton()
    });
    
    //This it block is excute for validate Inactive Tokens Table button
    it('TC_TrackNTrace_OrderTokenTable_040_Validate Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[39].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate expand rows button on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_041_Validate expand rows button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[40].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate select rows button on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_042_Validate select rows button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[41].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate token id search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_044_Validate token id search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[43].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.TokenId(OrderTokenTablesTestdata[43].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_045_Validate batch no search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[44].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.BatchNo(OrderTokenTablesTestdata[44].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_046_Validate category search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[45].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.Category(OrderTokenTablesTestdata[45].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_047_Validate sub-category search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[46].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.SubCategory(OrderTokenTablesTestdata[46].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_048_Validate product search box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[47].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.Product(OrderTokenTablesTestdata[47].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Inactive Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_049_Validate AddTxn button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[48].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Inactive Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_050_Validate View button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[49].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ViewButton()

        await DashboardPage.logout('Logout')
    }); 

    //This it block is excute for validate ViewTxn button on the Inactive Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_051_Validate ViewTxn button on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[50].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ViewTxnButton()
        await DashboardPage.logout('Logout')
    });
 
    //This it block is excute for validate page box on the Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_052_Validate page box on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[51].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.PageValidation(OrderTokenTablesTestdata[51].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_053_Validate show dropdown on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[52].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ShowValidation(OrderTokenTablesTestdata[52].Show)
        await DashboardPage.logout('Logout')
    });
    
    //This it block is excute for validate show dropdown has valid values on Inactive Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_054_Validate show dropdown has valid values on the Inactive Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[54].TestCaseID)
        await InactiveTokensTablePage.checkHeading('INACTIVE TOKENS')
        await InactiveTokensTablePage.ShowHasValidValues()
        await DashboardPage.logout('Logout')
    });
});