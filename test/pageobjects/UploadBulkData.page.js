const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class UploadBulkDataPage{

    //Web Locators

    get heading(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0'] div h3") //css for heading the uploadBulkData page
    }

    get enterBulkNumber(){
        return $('input[placeholder="Enter Bulk Number"]') //css for enter bulk number
    }

    get categoryDropdown(){
        return $("(//div[@id='fullWidth'])[1]") //xpath for category dropdown
    }

    get categoryList(){
        return $$('ul[role="listbox"]>li') //css for category list
    }

    get subCategoryDropdown(){
        return $("(//div[@id='fullWidth'])[2]") //xpath for sub-category dropdown
    }

    get subCategoryList(){
        return $$('ul[role="listbox"]>li') //css for sub-category list
    }

    get productDropdown(){
        return $("(//div[@id='fullWidth'])[3]") //xpath for product dropdown
    }

    get productList(){
        return $$('ul[role="listbox"]>li') //css for product list
    }

    get resetButton(){
        return $('div[style="padding: 20px 0px; background: white; float: right;"]>label:nth-child(2)') //css for reset button
    }

    get goBackButton(){
        return $('div[style="padding: 20px 0px; background: white; float: right;"]>label:nth-child(3)') //css for go back button
    }

    get csvUploadHistoryButton(){
        return $('div[style="padding: 20px 20px 0px; background: white;"]>h5>label') //css for csv upload history button
    }

    get csvPageHeading(){
        return $('div[style="padding: 20px 20px 0px; background: white;"]>h5>strong') //css for csv upload history page heading
    }

    get closeHistoryButton(){
        return $('div[style="padding: 20px 20px 0px; background: white;"]>h5>label') //css for close history button
    }

    get downloadCSVButton(){
        return $('div[class="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-3 css-1vpt8et"]>label') //css for download csv button
    }

    get selectCsvButton(){
        return $('div[style="padding: 20px 0px 20px 20px; background: white; width: 190px;"]>label') //css for select csv button
    }

    get importCsvButton(){
        return $('div[style="padding: 20px 0px; background: white; float: right;"]>label:nth-child(1)') //css for import csv button
    }

    /*
    This method is to validate the heading of upload bulk data page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of upload bulk data page

        report.addStep("Validate the heading of the upload bulk data page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to click on the enter bulk number and enter the value

    @param bulkNumber - bulk number should be passed
    */
    async EnterBulkNumber(bulkNumber){

        await this.enterBulkNumber.click() //Clicking on the Enter Bulk Number textbox

        await browser.pause(2000) //Pause browser

        await this.enterBulkNumber.setValue(bulkNumber) //Entering value into enter bulk number textbox

        report.addStep("Click on the enter bulk number and enter the value",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to click on the select category dropdown and select the category

    @param categoryName - category name should be passed
    */
    async Category(categoryName){

        await this.categoryDropdown.click() //Clicking on the category dropdown

        const category = await this.categoryList 

        for(var i=0; i<category.length; i++){

            const SelectCategory = await category[i].getText()

            report.addStep('Category name : ' + `${SelectCategory}`)

            if(SelectCategory.trim()==categoryName) {

                category[i].click();

                break;
            }
        }

        report.addStep('Click on the select category dropdown and select the category',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to click on the select sub-category dropdown and select the category

    @param subcategoryName - subcategory name should be passed
    */
    async SubCategory(subcategoryName){

        await this.subCategoryDropdown.click() //Clicking on the sub-category dropdown

        const subcategory = await this.subCategoryList 

        for(var i=0; i<subcategory.length; i++){

            const SelectSubCategory = await subcategory[i].getText()

            report.addStep('Sub-category name : ' + `${SelectSubCategory}`)

            if(SelectSubCategory.trim()==subcategoryName) {

                subcategory[i].click();

                break;
            }
        }

        report.addStep('Click on the select sub-category dropdown and select the sub-category',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to click on the select product dropdown and select the product

    @param productName - product name should be passed
    */
    async Product(productName){

        await this.productDropdown.click() //Clicking on the product dropdown

        const product = await this.productList 

        for(var i=0; i<product.length; i++){

            const SelectProduct = await product[i].getText()

            report.addStep('Product name : ' + `${SelectProduct}`)

            if(SelectProduct.trim()==productName) {

                product[i].click();

                break;
            }
        }

        report.addStep('Click on the select product dropdown and select the product',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the reset button
    */
    async ResetButton(){

        await this.resetButton.click() //Clicking on the reset button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on RESET button',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the GO BACK button
    */
    async GoBackButton(){

        await this.goBackButton.click() //Clicking on the GO BACk button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on GO BACK button',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the CSV UPLOAD HISTORY button
    */
    async CsvUploadHistory(){

        await this.csvUploadHistoryButton.click() //Clicking the csv upload history button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on CSV UPLOAD HISTORY button',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for uploades csv file history page
    */
    async UploadedCsvFileHistory(validationMessage){

        await expect(this.csvPageHeading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of uploaded csv file history page

        report.addStep("Validate the heading of the uploaded csv file history page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the CLOSE HISTORY button
    */
    async CloseHistory(){

        await this.closeHistoryButton.click() //Clicking the close history button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on CLOSE HISTORY button',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the DOWNLOAD CSV button
    */
    async DOWNLOAD_CSVButton(){

        await this.downloadCSVButton.click() //Clicking the download csv button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on DOWNLOAD CSV button',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the SELECT CSV FILE button
    */
    async SELECT_CSV_FILE(){

        await this.selectCsvButton.click() //Clicking the select csv file button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on SELECT CSV FILE button',await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the SELECT CSV FILE button
    */
    async ImportCsvButton(){

        await this.importCsvButton.click() //Clicking the import csv button

        await browser.pause(2000) //Pause browser

        report.addStep('Click on IMPORT CSV button',await browser.takeScreenshot(),"passed")
    }
}
module.exports = new UploadBulkDataPage(); //This is for exporting the instance of UploadBulkDataPage class