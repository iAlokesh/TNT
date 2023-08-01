const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobject/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobject/Dashboard.page') //This is for importing the instance of DashboardPage class
const ResetPasswordPage = require('../pageobject/ResetPassword.page') //This is for importing the instance of ResetPasswordPage class
const RegisterPage = require('../pageobject/Register.page') //This is for importing the instane of RegisterPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/LoginTestdata.json')) //This for importing the instance of LoginData

describe('Login', () => {

    //This will execute before each test
    beforeEach(async () => {
        await browser.url("https://trackandtracee.azurewebsites.net/")
        await expect(browser).toHaveUrlContaining('trackandtrace')
        await browser.pause(2000)
        await browser.maximizeWindow()
    });

    //This it block is excute for validate login
    it('TC_TrackNTrace_LOGIN_001_Validate Login', async () => {
        report.addTestId(LoginTestdata[0].TestCaseID)
        await LoginPage.login(LoginTestdata[0].email, LoginTestdata[0].password)
        await expect(browser).toHaveUrlContaining('dashboard')
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('dashboard')
        await DashboardPage.checkHeading('Track & Trace')
        await DashboardPage.logout('Logout')
        await browser.pause(2000)
    });

    //This it block is excute for validate login with wrong email
    it('TC_TrackNTrace_LOGIN_002_Validate Login with wrong Email', async () => {
        report.addTestId(LoginTestdata[1].TestCaseID)
        await LoginPage.login(LoginTestdata[1].email, LoginTestdata[1].password)
        await browser.pause(2000)
    });

    //This it block is excute for validate login with wrong password
    it('TC_TrackNTrace_LOGIN_003_Validate Login with wrong Password', async () => {
        report.addTestId(LoginTestdata[2].TestCaseID)
        await LoginPage.login(LoginTestdata[2].email, LoginTestdata[2].password)
        await browser.pause(2000)
    });

    //This it block is excute for validate that email field is mandatory
    it('TC_TrackNTrace_LOGIN_004_Validate that Email field is mandatory', async () => {
        report.addTestId(LoginTestdata[3].TestCaseID)
        await LoginPage.login(LoginTestdata[3].email, LoginTestdata[3].password)
        await browser.pause(2000)
        await LoginPage.emailIsMandatory('Email is required')
    });

    //This it block is excute for validate that password field is mandatory
    it('TC_TrackNTrace_LOGIN_005_Validate that Password field is mandatory', async () => {
        report.addTestId(LoginTestdata[4].TestCaseID)
        await LoginPage.login(LoginTestdata[4].email, LoginTestdata[4].password)
        await browser.pause(2000)
        await LoginPage.passwordIsMandatory('Password is required')
    });

    //This it block is excute for validate remember me with select check box
    it('TC_TrackNTrace_LOGIN_006_Validate Remember me with select check box', async () => {
        report.addTestId(LoginTestdata[5].TestCaseID)
        await LoginPage.login(LoginTestdata[5].email, LoginTestdata[5].password)
        await DashboardPage.checkHeading('Track & Trace')
        await DashboardPage.logout('Logout')
        await browser.pause(2000)
    });

    //This it block is excute for validate forget password link
    it('TC_TrackNTrace_LOGIN_007_Validate Forget Password link', async () => {
        report.addTestId(LoginTestdata[6].TestCaseID)
        await LoginPage.forgetPassword()
        await ResetPasswordPage.login(LoginTestdata[6].email, LoginTestdata[6].password)
        await DashboardPage.checkHeading('Track & Trace')
        await DashboardPage.logout('Logout')
        await browser.pause(2000)
    });

    //This it block is excute for validate the get started button
    it('TC_TrackNTrace_LOGIN_008_Validate the Get started button', async () => {
        report.addTestId(LoginTestdata[7].TestCaseID)
        await LoginPage.register()
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('register')
        await RegisterPage.checkHeading('Register to Track And Trace')
    });
});