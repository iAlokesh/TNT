const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const InitiateWorkflowPage = require('../pageobjects/InitiateWorkflow.page') //This is for importing the instance of InitiateWorkflowPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const CategoryPage = require('../pageobjects/Category.page') //This is for importing the instance of CategoryPage class
const SubCategoryPage = require('../pageobjects/SubCategory.page') //This is for importing the instance of SubCategoryPage class
const ProductPage = require('../pageobjects/Product.page') //This is for importing the instance of ProductPage class
const CreateOrderTokensPage = require('../pageobjects/CreateOrderTokens.page') //This is for importing the instance of CreateOrderTokensPage class
const InitiateWorkflowTestdata = JSON.parse(fs.readFileSync('test/TestData/InitiateWorkflowTestdata.json')) //This is for importing the instance of SubCategoryTestData

describe('Initiate workflow', () =>{
  
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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Initiate workflow dropdown
    it('TC_TrackNTrace_InitiateWorkflow_001_Validate Initiate workflow dropdown', async () => {
        report.addTestId(InitiateWorkflowTestdata[0].TestCaseID)
        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for ADD NEW button on the createWorkflow page
    it('TC_TrackNTrace_InitiateWorkflow_002_Validate ADD NEW button on the createWorkflow page', async () => {
        report.addTestId(InitiateWorkflowTestdata[1].TestCaseID)
        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.addNew()
        await InitiateWorkflowPage.Category(InitiateWorkflowTestdata[1].categoryName)
        await InitiateWorkflowPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate EDIT button on the createWorkflow page
    it('TC_TrackNTrace_InitiateWorkflow_004_Validate EDIT button on the createWorkflow page', async () => {
        report.addTestId(InitiateWorkflowTestdata[3].TestCaseID)
        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.Edit()
        await InitiateWorkflowPage.FilledCategory()
        await InitiateWorkflowPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the createWorkflow page
    it('TC_TrackNTrace_InitiateWorkflow_005_Validate DELETE button on the createWorkflow page', async () => {
        report.addTestId(InitiateWorkflowTestdata[4].TestCaseID)
        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.Delete()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the createWorkflow page
    it('TC_TrackNTrace_InitiateWorkflow_006_Validate FILTERS button on the createWorkflow page', async () => {
        report.addTestId(InitiateWorkflowTestdata[5].TestCaseID)
        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.Filters(InitiateWorkflowTestdata[5].categoryName)
        await DashboardPage.logout('Logout')
    });
});

describe('Category', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Category button
    it('TC_TrackNTrace_InitiateWorkflow_007_Validate Category button', async () => {
        report.addTestId(InitiateWorkflowTestdata[6].TestCaseID)
        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for ADD NEW button on the category page
    it('TC_TrackNTrace_InitiateWorkflow_008_Validate ADD NEW button on the category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[7].TestCaseID)
        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.addNew()
        await CategoryPage.CategoryBox(InitiateWorkflowPage[7].categoryName)
        await CategoryPage.Submit()
        await DashboardPage.logout('Logout')   
    });

    //This it block is excute for validate EDIT button on the category page
    it('TC_TrackNTrace_InitiateWorkflow_010_Validate EDIT button on the category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[9].TestCaseID)
        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.Edit()
        await CategoryPage.FilledCategory()
        await CategoryPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the category page
    it('TC_TrackNTrace_InitiateWorkflow_011_Validate DELETE button on the category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[10].TestCaseID)
        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.Delete()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the category page
    it('TC_TrackNTrace_InitiateWorkflow_012_Validate FILTERS button on the category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[11].TestCaseID)
        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.Filters(InitiateWorkflowTestdata[11].categoryName)
        await DashboardPage.logout('Logout')
    });
});

describe('Sub-Category', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Sub-Category button
    it('TC_TrackNTrace_InitiateWorkflow_013_Validate Sub-Category button', async () => {
        report.addTestId(InitiateWorkflowTestdata[12].TestCaseID)
        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ADD NEW button on sub-category page
    it('TC_TrackNTrace_InitiateWorkflow_014_Validate ADD NEW button on the sub-category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[13].TestCaseID)
        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.addNew()
        await SubCategoryPage.Category()
        //await SubCategoryPage.CategorySelect(SubCategoryTestdata[0].categoryName)
        await SubCategoryPage.SubCategoryBox(InitiateWorkflowTestdata[13].subCategoryName)
        await SubCategoryPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate EDIT button on the category page
    it('TC_TrackNTrace_InitiateWorkflow_017_Validate EDIT button on the sub-category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[16].TestCaseID)
        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.Edit()
        await SubCategoryPage.FilledSubCategory()
        await SubCategoryPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the sub-category page
    it('TC_TrackNTrace_InitiateWorkflow_018_Validate DELETE button on the sub-category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[17].TestCaseID)
        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.Delete()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the sub-category page
    it('TC_TrackNTrace_InitiateWorkflow_019_Validate FILTERS button on the sub-category page', async () => {
        report.addTestId(InitiateWorkflowTestdata[18].TestCaseID)
        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.Filters(InitiateWorkflowTestdata[18].subCategoryName)
        await DashboardPage.logout('Logout')
    });
});

describe('Product', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Product button
    it('TC_TrackNTrace_InitiateWorkflow_020_Validate Product button', async () => {
        report.addTestId(InitiateWorkflowTestdata[19].TestCaseID)
        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ADD NEW button on product page
    it('TC_TrackNTrace_InitiateWorkflow_021_Validate ADD NEW button on the product page', async () => {
        report.addTestId(InitiateWorkflowTestdata[20].TestCaseID)
        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.addNew()
        await ProductPage.Category()
        await ProductPage.SubCategory()
        await ProductPage.ProductBox(InitiateWorkflowTestdata[20].productName)
        await ProductPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate EDIT button on the product page
    it('TC_TrackNTrace_InitiateWorkflow_025_Validate EDIT button on the product page', async () => {
        report.addTestId(InitiateWorkflowTestdata[24].TestCaseID)
        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.Edit()
        await ProductPage.FilledProduct()
        await ProductPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the product page
    it('TC_TrackNTrace_InitiateWorkflow_026_Validate DELETE button on the product page', async () => {
        report.addTestId(InitiateWorkflowTestdata[25].TestCaseID)
        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.Delete()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the product page
    it('TC_TrackNTrace_InitiateWorkflow_027_Validate FILTERS button on the product page', async () => {
        report.addTestId(InitiateWorkflowTestdata[26].TestCaseID)
        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.Filters(InitiateWorkflowTestdata[26].productName)
        await DashboardPage.logout('Logout')
    });
});    

describe.only('Create Order Tokens', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate create order tokens button
    it('TC_TrackNTrace_InitiateWorkflow_028_Validate create order tokens button', async () => { 
        report.addTestId(InitiateWorkflowTestdata[27].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate create order tokens
    it.only('TC_TrackNTrace_InitiateWorkflow_029_Validate create order tokens', async () => { 
        report.addTestId(InitiateWorkflowTestdata[28].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.BatchNumber(InitiateWorkflowTestdata[28].batchNumber)
        await CreateOrderTokensPage.ItemTitle(InitiateWorkflowTestdata[28].itemTitle)
        await CreateOrderTokensPage.Description(InitiateWorkflowTestdata[28].description)
        await CreateOrderTokensPage.AddAttributes()
        await CreateOrderTokensPage.PropertiesName(InitiateWorkflowTestdata[28].propertiesName)
        await CreateOrderTokensPage.Value(InitiateWorkflowTestdata[28].value)
        await CreateOrderTokensPage.Submit('Token Added Successfully')
        await CreateOrderTokensPage.Close()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that batch number is required
    it('TC_TrackNTrace_InitiateWorkflow_030_Validate that batch number is required', async () => {
        report.addTestId(InitiateWorkflowTestdata[29].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.BatchNumberValidation('Batch Number is required')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that title is required
    it('TC_TrackNTrace_InitiateWorkflow_031_Validate that title is required', async () => {
        report.addTestId(InitiateWorkflowTestdata[30].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.TitleValidation('Title is required')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that description is required
    it('TC_TrackNTrace_InitiateWorkflow_032_Validate that description is required', async () => {
        report.addTestId(InitiateWorkflowTestdata[31].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.DescriptionValidation('Description is required')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that batch number must contain at least one lowearcase character
    it('TC_TrackNTrace_InitiateWorkflow_033_Validate that batch number must contain at least one lowearcase character', async () => {
        report.addTestId(InitiateWorkflowTestdata[32].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.LowercaseValidation('Must contain at least one lowercase character', InitiateWorkflowTestdata[32].batchNumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that batch number must contain at least one uppercase character
    it('TC_TrackNTrace_InitiateWorkflow_034_Validate that batch number must contain at least one uppercase character', async () => {
        report.addTestId(InitiateWorkflowTestdata[33].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.UppercaseValidation('Must contain at least one uppercase character', InitiateWorkflowTestdata[33].batchNumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that batch number should be of 7 characters
    it('TC_TrackNTrace_InitiateWorkflow_035_Validate that batch number should be of 7 characters', async () => {
        report.addTestId(InitiateWorkflowTestdata[34].TestCaseID)
        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        await CreateOrderTokensPage.SubCategory()
        await CreateOrderTokensPage.Product()
        await CreateOrderTokensPage.SevenCharactersValidation('Batch Number should be of 7 characters', InitiateWorkflowTestdata[34].batchNumber)
        await DashboardPage.logout('Logout')
    });
});    
