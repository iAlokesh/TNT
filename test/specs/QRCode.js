const LoginPage = require('../pageobjects/Login.page')
const DashboardPage = require('../pageobjects/Dashboard.page')
const OrderTokenTablesPage = require('../pageobjects/OrderTokenTables.page')
const FilledUnassignedTokensPage = require('../pageobjects/FilledUnassignedTokens.page')
const fs = require('fs')
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json'))
const { compareScreen } = require('webdriver-image-comparison');

async function qrCodeScan() {

    // Take a screenshot of the QR code
  
    const qrCodeScreenshot = await browser.takeScreenshot();
  
  
    // Compare the screenshot to a baseline image
  
    const qrCodeComparisonResult = await compareScreen({
  
      actualImage: qrCodeScreenshot,
  
      baselineFolder: './baseline',
  
      screenshotPath: './screenshots',
  
      diffFolder: './diff',
  
      diffFilename: 'qr-code-diff.png',
  
      ignoreAntialiasing: true
  
    });
  
  
    // Check if the QR code is valid
  
    if (qrCodeComparisonResult.isExactSameImage) {
  
      console.log('QR code is valid!');
  
    } else {
  
      console.log('QR code is invalid!');
  
    }
  
  }


  it('should scan the QR code', async () => {

    // Navigate to the page with the QR code

    await browser.url("https://trackandtracee.azurewebsites.net/");

    await expect(browser).toHaveUrlContaining('trackandtrace');
        
    await browser.pause(1000);
    
    await browser.maximizeWindow();

    await LoginPage.login(LoginTestdata[0].email, LoginTestdata[0].password)
        
    await expect(browser).toHaveUrlContaining('dashboard')
        
    await browser.pause(1000)

    await DashboardPage.checkHeading('Track & Trace')
        
    await browser.pause(1000)
        
    await DashboardPage.OrderTokenTables()
        
    await expect(browser).toHaveUrlContaining('tokens')

    await OrderTokenTablesPage.checkHeading('Order Token Tables')

    await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')

    await FilledUnassignedTokensPage.AddTxnButton()

    // Wait for the QR code to appear
  
    await browser.waitUntil(async () => {
  
      const qrCodeElement = await $("(//div[@class='MuiBox-root css-0'])[1]");
  
      return qrCodeElement.isDisplayed();
  
    }, { timeout: 5000, timeoutMsg: 'QR code not found!' });
  
  
    // Scan the QR code
  
    await qrCodeScan();
  
  });


































