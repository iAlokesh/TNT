const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class BlankTokensTablePage{

    //Web Locators
     
    get heading(){
        return $('h3[style="margin-left: 10px;"]') //css for heading
    }

    get expandRowsButton(){
        return $('span[title="Toggle All Rows Expanded"]') //css for expand rows button
    }

    get tokenIdSearchbox(){
        return $('th[role="columnheader"]:nth-child(2)>div:nth-child(2)>input') //css for token id search box
    }

    get tokenIdSearchResult(){
        return $('tbody[role="rowgroup"]>tr>td:nth-child(2)') //css for token id search result
    }

    get addButton(){
        return $('tbody>tr:nth-child(1)>td:nth-child(3)>div:nth-child(1)>span:nth-child(4)>button:nth-child(1)') //css for add button
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

    /*
    This method is to validate the heading of the blank tokens table page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the blank tokens table page
        
        report.addStep("Validate the heading of the blank tokens table page",await browser.takeScreenshot(),"passed")
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
    This method is for clicking on the add button and validate the url
    */
    async AddButton(){

        await this.addButton.click() //Clicking on the add button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the add button",await browser.takeScreenshot(),"passed")

        await expect(browser).toHaveUrlContaining('add-token-data')
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
module.exports = new BlankTokensTablePage(); //This is for exporting the instance of BlankTokensTablePage class