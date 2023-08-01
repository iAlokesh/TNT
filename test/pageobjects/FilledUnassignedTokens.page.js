const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class FilledUnassignedTokensPage{

    //Web Locators

    get heading(){
        return $('h3[style="margin-left: 10px;"]') //css for filled unassigned tokens table
    }

    get selectRowsButton(){
        return $('input[title="Toggle All Current Page Rows Selected"]') //css for select rows button
    }

    get expandRowsButton(){
        return $('span[title="Toggle All Rows Expanded"]') //css for expand rows button
    }

    get tokenIdSearchbox(){
        return $('tr[role="row"]>th:nth-child(3)>div:nth-child(2)>input') //css for token id search box
    }

    get tokenIdSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(3)') //css for token id search result
    }

    get batchNoSearchbox(){
        return $('tr[role="row"]>th:nth-child(4)>div:nth-child(2)>input') //css for batch no search box
    }

    get batchNoSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(4)') //css for batch no search result
    }

    get categorySearchbox(){
        return $('tr[role="row"]>th:nth-child(5)>div:nth-child(2)>input') //css for category search box
    }

    get categorySearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(5)') //css for category search result
    }

    get subCategorySearchbox(){
        return $('tr[role="row"]>th:nth-child(6)>div:nth-child(2)>input') //css for sub-category search box
    }

    get subCategorySearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(6)') //css for sub-category search result
    }

    get productSearchbox(){
        return $('tr[role="row"]>th:nth-child(7)>div:nth-child(2)>input') //css for product search box
    }

    get productSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(7)') //css for product search result
    }

    get distributorDropdown(){
        return $('#mui-component-select-id') //css for distributor dropdown
    }

    get distributorList(){
        return $$('ul[role="listbox"]>li') //css for distributor list
    }

    get outside(){
        return $('div[id="menu-id"]') //css for outside
    }

    get pageNumber(){
        return $('input[type="number"]') //css for page number
    }

    get showDropdown(){
        return $('div[class="col-md-2"]>select[class="form-select"]') //css for show dropdown
    }

    get selectShow(){
        return $$('div[class="col-md-2"]>select[class="form-select"]>option') //css for select show
    }

    get addTxnButton(){
        return $('tbody span:nth-child(1) button:nth-child(1)') //css for addtxn button
    }

    get viewButton(){
        return $('tbody span:nth-child(2) button:nth-child(1)') //css for view button
    }

    get viewTxnButton(){
        return $('tbody span:nth-child(3) button:nth-child(1)') //css for viewTxn button
    }

    get checking(){
        return $('div.css-12csv9o') //css for transctions page heading check
    }

    /*
    This method is to validate the heading of the filled unassigned tokens table

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the filled unassigned tokens table

        report.addStep("Validate the heading of the filled unassigned tokens table",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the select rows button
    */
    async SelectRowsButton(){

        await this.selectRowsButton.click() //Clicking on the select rows button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the select rows button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the distributor button and validate the values
    */
    async DistributorDropdown(){

        await this.distributorDropdown.click() //Clicking on the distributor dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the distributor dropdown",await browser.takeScreenshot(),"passed")

        let List = await this.distributorList

        for(var i=0; i<List.length; i++){

            console.log("Distributors name : " + await List[i].getText())

            const dropdown = await List[i].getText()

            report.addStep('Ditributors name : ' + `${dropdown}`);
        }

        await this.outside.click() //Clicking on the outside
    }

    /*
    This method is for clicking on the expand rows button and validate the heading
    */
    async ExpandRowsButton(){

        await this.expandRowsButton.click() //Clicking on the expand rows button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the expand rows button",await browser.takeScreenshot(),"passed")

        await expect(this.expandRowsButton).toHaveTextContaining('Expand Rows')
    }

    /*
    This method is for clicking on the token id search box and Enter the token id

    @param tokenid - token id should be passed.
    */
    async TokenId(tokenid){

        await this.tokenIdSearchbox.click() //Clicking on the token id search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the token id search box",await browser.takeScreenshot(),"passed")

        await this.tokenIdSearchbox.setValue(tokenid) //Enter the token id

        await browser.pause(2000) //Pause browser

        const UserEnteredTokenId = tokenid //Validate the search result

        const ResultTokenId = await this.tokenIdSearchResult.getText()

        if(UserEnteredTokenId===ResultTokenId){

            report.addStep('User is able to get the details : ' + `${ResultTokenId}`);
        }

        report.addStep("Validation for the token id search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the batch no search box and Enter the batch no

    @param batchno - batch no should be passed.
    */
    async BatchNo(batchno){

        await this.batchNoSearchbox.click() //Clicking on the batch no search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the batch no search box",await browser.takeScreenshot(),"passed")

        await this.batchNoSearchbox.setValue(batchno) //Enter the batch no

        await browser.pause(2000) //Pause browser

        const UserEnteredBatchNo = batchno //Validate the search result

        const ResultBatchNo = await this.batchNoSearchResult.getText()

        if(UserEnteredBatchNo===ResultBatchNo){

            report.addStep('User is able to get the details : ' + `${ResultBatchNo}`);
        }

        report.addStep("Validation for the batch no search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the category search box and Enter the category

    @param category - category should be passed.
    */
    async Category(category){

        await this.categorySearchbox.click() //Clicking on the category search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the category search box",await browser.takeScreenshot(),"passed")

        await this.categorySearchbox.setValue(category) //Enter the category

        await browser.pause(2000) //Pause browser

        const UserEnteredCategory = category //Validate the search result

        const ResultCategory = await this.categorySearchResult.getText()

        if(UserEnteredCategory===ResultCategory){

            report.addStep('User is able to get the details : ' + `${ResultCategory}`);
        }

        report.addStep("Validation for the category search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the sub-category search box and Enter the sub-category

    @param subcategory - subcategory should be passed.
    */
    async SubCategory(subcategory){

        await this.subCategorySearchbox.click() //Clicking on the sub-category search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the sub-category search box",await browser.takeScreenshot(),"passed")

        await this.subCategorySearchbox.setValue(subcategory) //Enter the sub-category

        await browser.pause(2000) //Pause browser

        const UserEnteredSubCategory = subcategory //Validate the search result

        const ResultSubCategory = await this.subCategorySearchResult.getText()

        if(UserEnteredSubCategory===ResultSubCategory){

            report.addStep('User is able to get the details : ' + `${ResultSubCategory}`);
        }

        report.addStep("Validation for the sub-category search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the product search box and Enter the product

    @param product - product should be passed.
    */
    async Product(product){

        await this.productSearchbox.click() //Clicking on the product search box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the product search box",await browser.takeScreenshot(),"passed")

        await this.productSearchbox.setValue(product) //Enter the sub-category

        await browser.pause(2000) //Pause browser

        const UserEnteredProduct = product //Validate the search result

        const ResultProduct = await this.productSearchResult.getText()

        if(UserEnteredProduct===ResultProduct){

            report.addStep('User is able to get the details : ' + `${ResultProduct}`);
        }

        report.addStep("Validation for the product search box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the page box and validate the page box

    @param pagenumber - page number should be passed
    */
    async PageValidation(pagenumber){

        await this.pageNumber.click() //Click on the page box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the page box",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        await this.pageNumber.setValue(pagenumber) //Enter page number

        report.addStep("Enter page number on the page box",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the show dropdown and select the show

    @param Show - show should be passed.
    */
    async ShowValidation(Show){

        await this.showDropdown.click() //Click on the show dropdown

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the show dropdown",await browser.takeScreenshot(),"passed")

        await browser.pause(2000) //Pause browser

        let show = await this.selectShow //Select show

        for(var i=0; i<show.length; i++){
          
            console.log("Dropdown Value : " + await show[i].getText())

            const dropdownValue = await show[i].getText()

            if(dropdownValue.trim()==Show){

                show[i].click();

                break;
            }
        }

        await browser.pause(2000) //Pause browser

        report.addStep("Select the show dropdown",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click on the AddTxn button
    */
    async AddTxnButton(){

        await this.addTxnButton.click() //Clicking on the AddTxn button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the AddTxn button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click on the view button
    */
    async ViewButton(){

        await this.viewButton.click() //Clicking on the View button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the View button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click on the viewTxn button
    */
    async ViewTxnButton(){

        await this.viewTxnButton.click() //Clicking on the ViewTxn button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the ViewTxn button",await browser.takeScreenshot(),"passed")

        expect(browser).toHaveUrlContaining('transctions')

        await expect(this.checking).toHaveTextContaining('Tracking')
    }

    /*
    This method is for clicking on the show dropdown and validate the values
    */
    async ShowHasValidValues(){

        await this.showDropdown.click() //Clicking on the show dropdown

        await browser.pause(2000) //Pause browser

        let show = await this.selectShow

        for(var i=0; i<show.length; i++){
             
            console.log("Dropdown Value : " + await show[i].getText())

            const dropdown = await show[i].getText()

            report.addStep('Show dropdown has values : ' + `${dropdown}`);
        }
    }
}
module.exports = new FilledUnassignedTokensPage(); //This is for exporting the instance of FilledUnassignedTokensPage class 