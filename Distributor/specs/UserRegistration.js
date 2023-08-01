const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports
const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const RegisterPage = require('../pageobjects/Register.page') //This is for importing the instance of RegisterPage class
const fs = require('fs') //This is for read JSON file
const UserRegistrationTestdata = JSON.parse(fs.readFileSync('Distributor/TestData/UserRegistrationTestdata.json')) //This is for importing the instance of UserRegistrationTestData

describe('User Resgistration', () => {

    //This will execute before each test
    beforeEach(async () => {
        await browser.url("https://trackandtracee.azurewebsites.net/")
        await expect(browser).toHaveUrlContaining('trackandtrace')
        await browser.pause(2000)
        await browser.maximizeWindow()
        await LoginPage.register()
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('register')
    });

    //This it block is excute for register user with valid details   
    it('TC_TrackNTrace_UserRegistration_001_Register user with valid details', async () =>{
        report.addTestId(UserRegistrationTestdata[0].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[0].firstName, 
            UserRegistrationTestdata[0].lastName, 
            UserRegistrationTestdata[0].emailId,
            UserRegistrationTestdata[0].phoneNumber,
            UserRegistrationTestdata[0].states,
            UserRegistrationTestdata[0].userRoles,
            UserRegistrationTestdata[0].enterPassword,
            UserRegistrationTestdata[0].confirmPassword)
    });

    //This it block is excute for validate that user role dropdown has valid values
    it('TC_TrackNTrace_UserRegistration_002_Validate that user role dropdown has valid values', async () => {
        report.addTestId(UserRegistrationTestdata[1].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.UserRoleHasValidValues()
    });

    //This it block is excute for validate that first name field is mandatory
    it('TC_TrackNTrace_UserRegistration_003_Validate that first name field is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[2].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[2].firstName, 
            UserRegistrationTestdata[2].lastName, 
            UserRegistrationTestdata[2].emailId,
            UserRegistrationTestdata[2].phoneNumber,
            UserRegistrationTestdata[2].states,
            UserRegistrationTestdata[2].userRoles,
            UserRegistrationTestdata[2].enterPassword,
            UserRegistrationTestdata[2].confirmPassword)
        await RegisterPage.firstNameIsRequied('First name is required')
    });

    //This it block is excute for validate that last name field is mandatory
    it('TC_TrackNTrace_UserRegistration_004_Validate that Last name field is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[3].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[3].firstName, 
            UserRegistrationTestdata[3].lastName, 
            UserRegistrationTestdata[3].emailId,
            UserRegistrationTestdata[3].phoneNumber,
            UserRegistrationTestdata[3].states,
            UserRegistrationTestdata[3].userRoles,
            UserRegistrationTestdata[3].enterPassword,
            UserRegistrationTestdata[3].confirmPassword)
        await RegisterPage.lastNameIsRequied('Last name is required')
    });

    //This it block is excute for validate that email field is mandatory
    it('TC_TrackNTrace_UserRegistration_005_Validate that Email field is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[4].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[4].firstName, 
            UserRegistrationTestdata[4].lastName, 
            UserRegistrationTestdata[4].emailId,
            UserRegistrationTestdata[4].phoneNumber,
            UserRegistrationTestdata[4].states,
            UserRegistrationTestdata[4].userRoles,
            UserRegistrationTestdata[4].enterPassword,
            UserRegistrationTestdata[4].confirmPassword)
        await RegisterPage.emailIsRequied('Email is required')
    });

    //This it block is excute for validate that phone number is mandatory
    it('TC_TrackNTrace_UserRegistration_006_Validate that phone number is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[5].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[5].firstName, 
            UserRegistrationTestdata[5].lastName, 
            UserRegistrationTestdata[5].emailId,
            UserRegistrationTestdata[5].phoneNumber,
            UserRegistrationTestdata[5].states,
            UserRegistrationTestdata[5].userRoles,
            UserRegistrationTestdata[5].enterPassword,
            UserRegistrationTestdata[5].confirmPassword)
        await RegisterPage.phoneNumberIsRequied('Phone Number is required')
    });

    //This it block is excute for validate that value in state/UT field is mandatory
    it('TC_TrackNTrace_UserRegistration_007_Validate that value in state/UT field is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[6].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register1(
            UserRegistrationTestdata[6].firstName, 
            UserRegistrationTestdata[6].lastName, 
            UserRegistrationTestdata[6].emailId,
            UserRegistrationTestdata[6].phoneNumber,
            UserRegistrationTestdata[6].userRoles,
            UserRegistrationTestdata[6].enterPassword,
            UserRegistrationTestdata[6].confirmPassword)
        await RegisterPage.stateIsRequied('State is required')
    });

    //This it block is excute for validate that value in user role is mandatory
    it('TC_TrackNTrace_UserRegistration_008_Validate that value in user role is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[7].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register2(
            UserRegistrationTestdata[7].firstName, 
            UserRegistrationTestdata[7].lastName, 
            UserRegistrationTestdata[7].emailId,
            UserRegistrationTestdata[7].phoneNumber,
            UserRegistrationTestdata[7].states,
            UserRegistrationTestdata[7].enterPassword,
            UserRegistrationTestdata[7].confirmPassword)
        await RegisterPage.userRoleIsRequied('Role is required')
    });

    //This it block is excute for validate that enter password is mandatory
    it('TC_TrackNTrace_UserRegistration_009_Validate that enter password is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[8].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[8].firstName, 
            UserRegistrationTestdata[8].lastName, 
            UserRegistrationTestdata[8].emailId,
            UserRegistrationTestdata[8].phoneNumber,
            UserRegistrationTestdata[8].states,
            UserRegistrationTestdata[8].userRoles,
            UserRegistrationTestdata[8].enterPassword,
            UserRegistrationTestdata[8].confirmPassword)
        await RegisterPage.enterPasswordIsRequied('Password is required')
    });

    //This it block is excute for validate that confirm password is mandatory
    it('TC_TrackNTrace_UserRegistration_010_Validate that confirm password is mandatory', async () => {
        report.addTestId(UserRegistrationTestdata[9].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[9].firstName, 
            UserRegistrationTestdata[9].lastName, 
            UserRegistrationTestdata[9].emailId,
            UserRegistrationTestdata[9].phoneNumber,
            UserRegistrationTestdata[9].states,
            UserRegistrationTestdata[9].userRoles,
            UserRegistrationTestdata[9].enterPassword,
            UserRegistrationTestdata[9].confirmPassword)
        await RegisterPage.confirmPasswordIsRequied('Confirm Password is a required field')
    });

    //This it block is excute for validate that first name field is not accepting special character or number
    it('TC_TrackNTrace_UserRegistration_011_Validate that first name field is not accepting special character or number', async () => {
        report.addTestId(UserRegistrationTestdata[10].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[10].firstName, 
            UserRegistrationTestdata[10].lastName, 
            UserRegistrationTestdata[10].emailId,
            UserRegistrationTestdata[10].phoneNumber,
            UserRegistrationTestdata[10].states,
            UserRegistrationTestdata[10].userRoles,
            UserRegistrationTestdata[10].enterPassword,
            UserRegistrationTestdata[10].confirmPassword)
        await RegisterPage.firstNameIsRequied('Only alphabets are allowed for this field')
    });

    //This it block is excute for validate that last name field is not accepting special character or number
    it('TC_TrackNTrace_UserRegistration_012_Validate that Last name field is not accepting special character or number', async () => {
        report.addTestId(UserRegistrationTestdata[11].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[11].firstName, 
            UserRegistrationTestdata[11].lastName, 
            UserRegistrationTestdata[11].emailId,
            UserRegistrationTestdata[11].phoneNumber,
            UserRegistrationTestdata[11].states,
            UserRegistrationTestdata[11].userRoles,
            UserRegistrationTestdata[11].enterPassword,
            UserRegistrationTestdata[11].confirmPassword)
        await RegisterPage.lastNameIsRequied('Only alphabets are allowed for this field')
    });

    //This it block is excute for validate that email field is only accepting proper email format
    it('TC_TrackNTrace_UserRegistration_013_Validate that Email field is only accepting proper email format', async () => {
        report.addTestId(UserRegistrationTestdata[12].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[12].firstName, 
            UserRegistrationTestdata[12].lastName, 
            UserRegistrationTestdata[12].emailId,
            UserRegistrationTestdata[12].phoneNumber,
            UserRegistrationTestdata[12].states,
            UserRegistrationTestdata[12].userRoles,
            UserRegistrationTestdata[12].enterPassword,
            UserRegistrationTestdata[12].confirmPassword)
        await RegisterPage.emailIsRequied('Email must be a valid email address')
    });

    //This it block is excute for validate that phone is only accepting 10 digit number
    it('TC_TrackNTrace_UserRegistration_014_Validate that phone number is only accepting 10 digit number', async () => {
        report.addTestId(UserRegistrationTestdata[13].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[13].firstName, 
            UserRegistrationTestdata[13].lastName, 
            UserRegistrationTestdata[13].emailId,
            UserRegistrationTestdata[13].phoneNumber,
            UserRegistrationTestdata[13].states,
            UserRegistrationTestdata[13].userRoles,
            UserRegistrationTestdata[13].enterPassword,
            UserRegistrationTestdata[13].confirmPassword)
        await RegisterPage.phoneNumberIsRequied('Phone Number must be of 10 Digits')
    });

    //This it block is excute for validate that enter password field is only accepting password in proper format
    it.skip('TC_TrackNTrace_UserRegistration_015_Validate that enter password field is only accepting password in proper format', async () =>{
        report.addTestId(UserRegistrationTestdata[14].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
    });
    
    //This it block is excute for validate that state dropdown has valid values
    it('TC_TrackNTrace_UserRegistration_016_Validate that state dropdown has valid values', async () => {
        report.addTestId(UserRegistrationTestdata[15].TestCaseID)
        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.StateHasValidValues()
    });
});