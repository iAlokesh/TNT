const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class CreateOrderTokensPage{

    //Web Locators

    get heading(){
        return $('a[href="/publishArt"]') //css for heading the create order tokens page
    }

    get createOrderTokensButton(){
        return $('a[href="/publishArt"]') //css for create order tokens button
    }

    get categoryDropdown(){
        return $('div[class="form-group"]>select[name="category"]') //css for category dropdown box
    }

    get selectCategory(){
        return $('select[name="category"]') //css for select category
    }

    get subCategoryDropdown(){
        return $('div[class="form-group"]>select[name="subCategory"]') //css for sub-category dropdown box
    }

    get selectSubCategory(){
        return $('select[name="subCategory"]') //css for select sub-category
    }

    get productDropdown(){
        return $('div[class="form-group"]>select[name="product"]') //css for product dropdown box
    }

    get selectProduct(){
        return $('select[name="product"]') //css for select product
    }

    get batchNumberTextbox(){
        return $('input[name="batchNumber"]') //css for batch number textbox
    }

    get itemTitleTextbox(){
        return $('input[name="title"]') //css for item title textbox
    }

    get descriptionTextbox(){
        return $('textarea[name="description"]') //css for description textbox
    }

    get addAttributesButton(){
        return $("//button[normalize-space()='Add attributes']") //xpath for add attributes button
    }

    get propertiesNameTextbox(){
        return $('input[placeholder="Enter Properties name"]') //css for properties name textbox
    }

    get valueTextbox(){
        return $('input[name="attributes.0.value"]') //css for value textbox
    }

    get submitButton(){
        return $('span[class="input-group-btn"]') //css for submit button
    }

    get closeButton(){
        return $('center>button[type="button"]') //css for close button
    }

    get tokenAddedSucessfully(){
        return $('h2[class="MuiTypography-root MuiTypography-h6 css-1anx036"]>b') //css for token added sucessfully message
    }

    get batchNumberRequired(){
        return $("(//p[normalize-space()='Batch Number is required'])[1]") //xpath for batch number is required validation
    }

    get titleRequired(){
        return $("(//p[normalize-space()='Title is required'])[1]") //xpath for title is required validation
    }

    get descriptionRequired(){
        return $("(//p[normalize-space()='Description is required'])[1]") //xpath for description is required validation
    }

    get outside(){
        return $('div>div.css-1ha4th6:nth-child(1)') //css for outside
    }

    get lowercaseValidation(){
        return $("(//p[normalize-space()='Must contain at least one lowercase character'])[1]") //xpath for batch number must contain at least one lowercase character 
    }

    get uppercaseValidation(){
        return $("(//p[normalize-space()='Must contain at least one uppercase character'])[1]") //xpath for batch number must contain at least one uppercase character
    }

    get sevenCharactersValidation(){
        return $("(//p[normalize-space()='Batch Number should be of 7 characters'])[1]") //xpath for batch number should be of 7 characters 
    }

    /*
    This method is to validate the heading of the create order tokens page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the create order tokens page

        report.addStep("Validate the heading of the create order tokens page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the create order tokens button
    */
    async CreateOrderTokens(){

        await this.createOrderTokensButton.click() //Clicking on the create order tokens button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the create order tokens button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the category dropdown box and select the category
    */
    async Category(){

        await this.categoryDropdown.click() //Clicking on the category dropdown box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the category dropdown box",await browser.takeScreenshot(),"passed")

        await this.selectCategory.selectByIndex(1) //Selecting the category 

        await browser.pause(2000) //Pause browser

        report.addStep("Select the category from dropdown",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the sub-category dropdown box and select the sub-category
    */
    async SubCategory(){

        await this.subCategoryDropdown.click() //Clicking on the sub-category dropdown box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the sub-category dropdown box",await browser.takeScreenshot(),"passed")

        await this.selectSubCategory.selectByIndex(1) //Selecting the sub-category 

        await browser.pause(2000) //Pause browser

        report.addStep("Select the sub-category from dropdown",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the product dropdown box and select the product
    */
    async Product(){

        await this.productDropdown.click() //Clicking on the product dropdown box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the product dropdown box",await browser.takeScreenshot(),"passed")

        await this.selectProduct.selectByIndex(1) //Selecting the product

        await browser.pause(2000) //Pause browser

        report.addStep("Select the product from dropdown",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the batch number and enter the batch number

    @param batchNumber - batch number should be passed
    */
    async BatchNumber(batchNumber){

        await this.batchNumberTextbox.click() //Clicking on the batch number textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the batch number textbox",await browser.takeScreenshot(),"passed")

        await this.batchNumberTextbox.setValue(batchNumber) //Entering the batch number

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the batch number",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the item title textbox and enter the item title

    @param itemTitle - item title should be passed
    */
    async ItemTitle(itemTitle){

        await this.itemTitleTextbox.click() //Clicking on the item title textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the item title textbox",await browser.takeScreenshot(),"passed")

        await this.itemTitleTextbox.setValue(itemTitle) //Entering the item title

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the item title",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the description textbox and enter the description

    @param description - description should be passed
    */
    async Description(description){

        await this.descriptionTextbox.click() //Clicking on the description textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the description textbox",await browser.takeScreenshot(),"passed")

        await this.descriptionTextbox.setValue(description) //Entering the description

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the description",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the add attributes button
    */
    async AddAttributes(){

        await this.addAttributesButton.click() //Clicking on the add attributes button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the add attributes button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the properties name textbox and enter the properties name

    @param propertiesName - properties name should be passed
    */
    async PropertiesName(propertiesName){

        await this.propertiesNameTextbox.click() //Clicking on the properties name textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on thr properties name textbox",await browser.takeScreenshot(),"passed")

        await this.propertiesNameTextbox.setValue(propertiesName) //Entering the properties name

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the properties name",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the value textbox and enter the value

    @param value - value should be passed
    */
    async Value(value){

        await this.valueTextbox.click() //Clicking on the value textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on thr value textbox",await browser.takeScreenshot(),"passed")

        await this.valueTextbox.setValue(value) //Entering the value

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the value",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the submit button
    */
    async Submit(validationMessage){

        await this.submitButton.click() //Clicking on the submit button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the submit button",await browser.takeScreenshot(),"passed")

        await expect(this.tokenAddedSucessfully).toHaveTextContaining(validationMessage)

        report.addStep("Token Added Sucessfully", await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the submit button
    */
    async Close(){
 
        await this.closeButton.click() //Clicking on the close button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the close button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate batch number is required for create order tokens

    @param validationMessage - message which needs to be validated should be passed
    */
    async BatchNumberValidation(validationMessage){

        await this.batchNumberTextbox.click() //Clicking on the batch number textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the batch number textbox",await browser.takeScreenshot(),"passed")

        await this.outside.click() //Clicking outside

        await expect(this.batchNumberRequired).toHaveTextContaining(validationMessage) //validating batch number is required for create order tokens 

        report.addStep("Validate the batch number is required for create order tokens",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate title is required for create order tokens

    @param validationMessage - message which needs to be validated should be passed
    */
    async TitleValidation(validationMessage){

        await this.itemTitleTextbox.click() //Clicking on the item title textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the item title textbox",await browser.takeScreenshot(),"passed")

        await this.outside.click() //Clicking outside

        await expect(this.titleRequired).toHaveTextContaining(validationMessage) //validating title is required for create order tokens 

        report.addStep("Validate the title is required for create order tokens",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate description is required for create order tokens

    @param validationMessage - message which needs to be validated should be passed
    */
    async DescriptionValidation(validationMessage){

        await this.descriptionTextbox.click() //Clicking on the description textbox

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the description textbox",await browser.takeScreenshot(),"passed")

        await this.outside.click() //Clicking outside

        await expect(this.descriptionRequired).toHaveTextContaining(validationMessage) //validating description is required for create order tokens 

        report.addStep("Validate the description is required for create order tokens",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate batch number must contain at least one lowercase character

    @param validationMessage - message which needs to be validate should be passed
    @param batchNumber - batch number should be passed
    */
    async LowercaseValidation(validationMessage, batchNumber){

        await this.batchNumberTextbox.click() //Clicking on the batch number textbox

        await browser.pause(2000) //Pause browser

        await this.batchNumberTextbox.setValue(batchNumber) //Enter the batch number

        report.addStep("Click on the batch number textbox and enter the batch number",await browser.takeScreenshot(),"passed")

        await this.outside.click() //Clicking outside

        await expect(this.lowercaseValidation).toHaveTextContaining(validationMessage) //validating batch number must contain at least one lowercase character

        report.addStep("Validate the batch number must contain at least one lowercase character",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate batch number must contain at least one uppercase character

    @param validationMessage - message which needs to be validate should be passed
    @param batchNumber - batch number should be passed
    */
    async UppercaseValidation(validationMessage, batchNumber){

        await this.batchNumberTextbox.click() //Clicking on the batch number textbox

        await browser.pause(2000) //Pause browser

        await this.batchNumberTextbox.setValue(batchNumber) //Enter the batch number

        report.addStep("Click on the batch number textbox and enter the batch number",await browser.takeScreenshot(),"passed")

        await this.outside.click() //Clicking outside

        await expect(this.uppercaseValidation).toHaveTextContaining(validationMessage) //validating batch number must contain at least one uppercase character

        report.addStep("Validate the batch number must contain at least one uppercase character",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validate batch number should be of 7 characters

    @param validationMessage - message which needs to be validate should be passed
    @param batchNumber - batch number should be passed
    */
    async SevenCharactersValidation(validationMessage, batchNumber){

        await this.batchNumberTextbox.click() //Clicking on the batch number textbox

        await browser.pause(2000) //Pause browser

        await this.batchNumberTextbox.setValue(batchNumber) //Enter the batch number

        report.addStep("Click on the batch number textbox and enter the batch number",await browser.takeScreenshot(),"passed")

        await this.outside.click() //Clicking outside

        await expect(this.sevenCharactersValidation).toHaveTextContaining(validationMessage) //validating batch number should be of 7 characters

        report.addStep("Validate the batch number should be of 7 character",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new CreateOrderTokensPage(); //This is for exporting the instance of CreateOrderTokensPage class