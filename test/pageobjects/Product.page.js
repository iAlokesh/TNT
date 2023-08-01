const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class ProductPage{

    //Web Locators

    get heading(){
        return $("li>a[href='/product']") //css for heading the product page
    }

    get productButton(){
        return $('div>a[href="/product"]') //css for product button
    }

    get addNewButton(){
        return $('span:nth-child(1) button:nth-child(1)') //css for add new button
    }

    get categoryDropdown(){
        return $("(//div[@id='fullWidth'])[1]") //xpath for category dropdown
    }

    get selectCategory(){
        return $("div[id='menu-categoryId'] li:nth-child(1)") //css for select category
    }

    get subCategoryDropdown(){
        return $("(//div[@id='fullWidth'])[2]") //xpath for sub-category dropdown
    }

    get selectSubCategory(){
        return $("div[id='menu-sub_category_id'] li:nth-child(1)") //css for select sub-category
    }

    get productTextbox(){
        return $('input[name="productName"]') //css for product textbox
    }

    get submitButton(){
        return $('button.css-1hw9j7s') //css for submit button
    }

    get editButton(){
        return $("(//button[@type='button'][normalize-space()='Edit'])[1]") //xpath for edit button
    }

    get filledProductTextbox(){
        return $('input[name="productName"]') //css for product textbox
    }

    get filtersButton(){
        return $("span:nth-child(2) button:nth-child(1)") //css for filters button
    }

    get categoryFilterDropdown(){
        return $("div[id='menu-categoryFilter'] li:nth-child(1)") //css for select category
    }

    get subCategoryFilterDropdown(){
        return $("div[id='menu-subCategoryFilter'] li:nth-child(1)") //css for select sub-category
    }

    get productFilterTextbox(){
        return $("(//input[@id='fullWidth'])[1]") //xpath for product textbox
    }

    get removeFilterButton(){
        return $('div[class="MuiGrid-root css-rfnosa"]>button') //css for remove filter button
    }

    get deleteButton(){
        return $("(//button[@type='button'][normalize-space()='Delete'])[1]") //xpath for delete button
    }

    get deleteProductButton(){
        return $('.css-1hw9j7s') //css for delete product button
    }
    
    /*
    This method is to validate the heading of the product page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){
        
        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the product page

        report.addStep("Validate the heading of the product page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the product button
    */
    async Product(){

        await this.productButton.click() //Clicking on the product button

        report.addStep("Click on the product button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the add new button
    */
    async addNew(){

        await this.addNewButton.click() //Clicking on the add new button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the add new button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the category dropdown
    */
    async Category(){

        await this.categoryDropdown.click() //Clicking on the category dropdown
        
        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the category dropdown",await browser.takeScreenshot(),"passed")

        await this.selectCategory.click() //Selecting the category

        await browser.pause(2000) //Pause browser

        report.addStep("User has selecting the category",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the sub-category dropdown
    */
    async SubCategory(){

        await this.subCategoryDropdown.click() //Clicking on the sub-category dropdown
        
        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the sub-category dropdown",await browser.takeScreenshot(),"passed")

        await this.selectSubCategory.click() //Selecting the sub-category

        await browser.pause(2000) //Pause browser

        report.addStep("User has selecting the sub-category",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to enter the product name

    @param productName - Product name should be passed
    */
    async ProductBox(productName){

        await this.productTextbox.click() //Clicking on the product textbox

        await this.productTextbox.setValue(productName) //Entering value into product textbox

        report.addStep("User has entered product name",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the submit button
    */
    async Submit(){

        await this.submitButton.click() //Clicking on the submit button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the submit button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the edit button
    */
    async Edit(){

        await this.editButton.click() //Clicking on the edit button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the edit button",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the filled product textbox and edit the product name
    */
    async FilledProduct(){

        await this.filledProductTextbox.click() //Clicking on product textbox

        await this.filledProductTextbox.setValue(' 1') //Entering value on the product textbox

        await browser.pause(2000) //Pause browser

        report.addStep("User has editing the product name",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the filters button, select category dropdown, select sub-category dropdown, validate product filter 
    searchbox and clicking on the remove filter button

    @param productName - product name should be passed
    */
    async Filters(productName){

        await this.filtersButton.click() //Clicking on the filters button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the filters button",await browser.takeScreenshot(),"passed")

        await this.categoryDropdown.click() //Clicking on the category dropdown

        await this.categoryFilterDropdown.click() //Select category

        report.addStep("User has clicking on the category dropdown and select the category from dropdown",await browser.takeScreenshot(),"passed")

        await this.subCategoryDropdown.click() //Clicking on the sub-category dropdown

        await this.subCategoryFilterDropdown.click() //Select sub-category

        report.addStep("User has clicking on the sub-category dropdown and select the sub-category from dropdown",await browser.takeScreenshot(),"passed")
        
        await this.productFilterTextbox.click() //Clicking on the product searchbox

        await this.productFilterTextbox.setValue(productName)

        report.addStep("User has entered product name on the product filters searchbox",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        await this.removeFilterButton.click() //Clicking on the remove filter button

        report.addStep("User has clicking on the remove filter button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the delete button
    */
    async Delete(){

        await this.deleteButton.click() //Clicking on the delete button

        await browser.pause(2000) //Pause browser

        report.addStep("Clicking on the delete button",await browser.takeScreenshot(),"passed")

        await this.deleteProductButton.click() //Clicking on the delete category button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the delete product button",await browser.takeScreenshot(),"passed")

    }
}
module.exports = new ProductPage(); //This is for exporting the instance of ProductPage class