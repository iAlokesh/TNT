const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class CreateBulkOrderTokensPage{

    //Web Locators

    get heading(){
        return $("div>h4") //css for heading the publishBulkArt page
    }

    get bulkTokenNumberTextbox(){
        return $('input[name="totalTokens"]') //css for bulk token number textbox
    }

    get resetButton(){
        return $('span:nth-child(1)>label') //css for reset button
    }

    get submitButton(){
        return $('span:nth-child(2)>label') //css for submit button
    }

    get quickActionsButtons(){
        return $$('div.css-u8pp4r>div>span>button[type="button"]') //css for Qucik Action Buttons
    }

    get validation(){
        return $('center>h2>b[style="color: red;"]') //css for validation message
    }

    get closeButton(){
        return $('center>button[type="button"]') //css for close button
    }

    /*
    This method is to validate the heading of the create bulk order tokens page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the cretae bulk order tokens page

        report.addStep("Validate the heading of the create bulk order tokens page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to click on the bulk token number box and enter the numbers of token which are required
    */
    async BulkTokenNumber(token){

        await this.bulkTokenNumberTextbox.click() //Clicking on the bulk token number box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the bulk token number box",await browser.takeScreenshot(),"passed")

        await this.bulkTokenNumberTextbox.setValue(token) //Enter the number of token

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the number of token",await browser.takeScreenshot(),"passed") 
    } 

    /*
    This method is for click the Reset button
    */
    async ResetButton(){

        await this.resetButton.click() //Clicking on the reset button

        report.addStep("Click on the reset button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the submit button
    */
    async SubmitButton(){

        await this.submitButton.click() //Clicking on the submit button

        report.addStep("Click on the submit button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click and validate Quick Action (Add Token Buttons)

    @param ActionButtons - Action Buttons should be passed
    */
    async QuickActionButtons(ActionButtons){

        const buttons = await this.quickActionsButtons

        for(var i=0; i<buttons.length; i++) {

            console.log('Qucik Action (Add Token Button) : ' + await buttons[i].getText())

            const actionButtons = await buttons[i].getText()

            report.addStep('Quick Action (Add Token Button) : ' + `${actionButtons}`)

            if(actionButtons.trim()==ActionButtons) {

                buttons[i].click();

                break;
            }
        }

        report.addStep("Click and Validate Quick Action (Add Token Buttons)",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for validation
    */
    async BulkTokenTextboxValidation(validationMessage){

        await expect(this.validation).toHaveTextContaining(validationMessage) //Validate validation message

        report.addStep("Validate the validation message",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the close button
    */
    async CloseButton(){

        await this.closeButton.click() //Clicking on the close button

        report.addStep("Click on the colse button",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new CreateBulkOrderTokensPage(); //This is for exporting the instance of CreateBulkOrderTokensPage class