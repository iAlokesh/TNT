const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class SubCategoryPage{

    //Web Locators

    get heading(){
        return $("li>a[href='/sub-category']") //css for heading the sub-category page
    }

    get subCategoryButton(){
        return $('div>a[href="/sub-category"]') //css for sub-category button
    }

    get addNewButton(){
        return $('span:nth-child(1) button:nth-child(1)') //css for add new button
    }

    get categoryDropdown(){
        return $('div[aria-haspopup="listbox"]') //css for category dropdown
    }

    /*get selectCategory(){
        return $('ul[role="listbox"]>li') //css for category list
    }*/

    get selectCategory(){
        return $("div[id='menu-categoryId'] li:nth-child(2)") //css for select category
    }

    get subCategoryTextbox(){
        return $('input[name="subCategoryName"]') //css for sub-category textbox
    }

    get submitButton(){
        return $('button.css-1hw9j7s') //css for submit button
    }

    get editButton(){
        return $("(//button[@type='button'][normalize-space()='Edit'])[1]") //xpath for edit button
    }

    get filledSubCategoryTextbox(){
        return $('input[name="subCategoryName"]') //css for filled sub-category textbox
    }

    get filtersButton(){
        return $("span:nth-child(2) button:nth-child(1)") //css for filters button
    }

    get categoryDropdown(){
        return $('div[aria-haspopup="listbox"]') //css for category dropdown
    }

    get subCategoryFilterSearchbox(){
        return $('input[name="subCategoryFilter"]') //css for sub-category filter search box
    }

    get removeFilterButton(){
        return $('div[class="MuiGrid-root css-rfnosa"]>button') //css for remove filter button
    }

    get deleteButton(){
        return $("(//button[@type='button'][normalize-space()='Delete'])[1]") //xpath for delete button
    }

    get deleteSubCategoryButton(){
        return $('.css-1hw9j7s') //css for delete sub-category button
    }

    get selectCategorys(){
        return $('ul[role="listbox"]>li:nth-child(2)') //css for select category
    }

    /*get selectCategorys(){
        return $('ul[role="listbox"]>li') //css for select category
    }*/

    /*
    This method is to validate the heading of the sub-category page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the sub-category page

        report.addStep("Validate the heading of the sub-category page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the category button
    */
    async SubCategory(){

        await this.subCategoryButton.click() //Clicking on the category button

        report.addStep("Click on the sub-category button",await browser.takeScreenshot(),"passed")
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
    */
    /*async CategorySelect(categoryName){

        let category = await this.selectCategory
        for( var i=0; i<category.length; i++){
            console.log("Dropdown Value : " + await category[i].getText())
            const dropdownValue = await category[i].getText()
            if(dropdownValue.trim()==categoryName){
                category[i].click();
                break;
            }
        }
    }*/

    /*
    This method is to enter the sub-category name

    @param subCategoryName - Sub-category name should be passed
    */
    async SubCategoryBox(subCategoryName){

        await this.subCategoryTextbox.click() //Clicking on the sub-category textbox

        await this.subCategoryTextbox.setValue(subCategoryName) //Entering value into sub-category textbox

        report.addStep("User has entered sub-Category name",await browser.takeScreenshot(),"passed")
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
    This method is for clicking on the filled sub-category textbox and edit the sub-category
    */
    async FilledSubCategory(){

        await this.filledSubCategoryTextbox.click() //Clicking on sub-category textbox

        await this.filledSubCategoryTextbox.setValue(' 1') //Entering value on the sub-category textbox

        await browser.pause(2000) //Pause browser

        report.addStep("User has editing the sub-category name",await browser.takeScreenshot(),"passed")

    }

    /*
    This method is for clicking on the filters button, select category dropdown, validate sub-category filter searchbox and clicking on 
    the remove filter button

    @param categoryName - category name should be passed
    @param subCategoryName - sub-category name should be passed
    */
    async Filters(categoryNames, subCategoryName){

        await this.filtersButton.click() //Clicking on the filters button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the filters button",await browser.takeScreenshot(),"passed")

        await this.categoryDropdown.click() //Clicking on the category dropdown

        await this.selectCategorys.click() //select category

        /*let category = await this.selectCategorys
        for( var i=0; i<category.length; i++){
            console.log("Dropdown Value : " + await category[i].getText())
            const dropdownValue = await category[i].getText()
            if(dropdownValue.trim()==categoryNames){
                category[i].click();
                break;
            }
        }*/

        report.addStep("User has clicking on the category dropdown and select the category from dropdown",await browser.takeScreenshot(),"passed")

        await this.subCategoryFilterSearchbox.click() //Clicking on the category filter searchbox

        await this.subCategoryFilterSearchbox.setValue(subCategoryName) //Entering value on the category filter searchbox

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

        await this.deleteSubCategoryButton.click() //Clicking on the delete category button

        await browser.pause(2000) //Pause browser

        report.addStep("User has clicking on the delete sub-category button",await browser.takeScreenshot(),"passed")

    }
}
module.exports = new SubCategoryPage(); //This is for exporting the instance of SubCategoryPage class