const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class InitiateWorkflowPage{

    //Web Locators

    get heading(){
        return $('a[href="/createWorkflow"]>button') //css for heading the createWorkflow page
    }

    get addNewButton(){
        return $('span:nth-child(1) button:nth-child(1)') //css for add new button
    }

    get categoryTextbox(){
        return $('input[name="categoryName"]') //css for category box
    }

    get submitButton(){
        return $('button.css-1hw9j7s') //css for submit button
    }

    get editButton(){
        return $("(//button[@type='button'][normalize-space()='Edit'])[1]") //xpath for edit button
    }

    get filledCategoryTextbox(){
        return $("(//input[@id='fullWidth'])[1]") //xpath for filled category textbox
    }

    get filtersButton(){
        return $("span:nth-child(2) button:nth-child(1)") //css for filters button
    }

    get deleteButton(){
        return $("(//button[@type='button'][normalize-space()='Delete'])[1]") //xpath for delete button
    }

    get deleteCategoryButton(){
        return $('.css-1hw9j7s') //css for delete category button
    }

    get categoryFilterSearchbox(){
        return $('#fullWidth') //css for category filter search box
    }

    get removeFilterButton(){
        return $('div[class="MuiGrid-root css-rfnosa"]>button') //css for remove filter button
    }

    /*
    This method is to validate the heading of the initiate workflow page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the initiate workflow page

        report.addStep("Validate the heading of the initiate workflow page",await browser.takeScreenshot(),"passed")
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
    This method is to enter the category name

    @param categoryName - category name should be passed
    */
    async Category(categoryName){

        await this.categoryTextbox.click() //Clicking on the category textbox

        await this.categoryTextbox.setValue(categoryName) //Entering value into category textbox

        report.addStep("User has entered category name",await browser.takeScreenshot(),"passed")
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
    This method is for clicking on the category textbox
    */
    async FilledCategory(){

        await this.filledCategoryTextbox.click() //Clicking on category textbox

        await this.filledCategoryTextbox.setValue(' 2') //Entering value on the category textbox

        await browser.pause(2000) //Pause browser

        report.addStep("User has editing the category name",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the filters button and validate category filter searchbox and clicking on the remove filter button

    @param categoryName - category name should be passed
    */
    async Filters(categoryName){

        await this.filtersButton.click() //Clicking on the filters button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the filters button",await browser.takeScreenshot(),"passed")

        await this.categoryFilterSearchbox.click() //Clicking on the category filter searchbox

        await this.categoryFilterSearchbox.setValue(categoryName) //Entering value on the category filter searchbox

        report.addStep("User has entered category name on the category filters searchbox",await browser.takeScreenshot(),"passed")

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

        await this.deleteCategoryButton.click() //Clicking on the delete category button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the delete category button",await browser.takeScreenshot(),"passed")

    }
}
module.exports = new InitiateWorkflowPage(); //This is for exporting the instance of InitiateWorkflowPage class