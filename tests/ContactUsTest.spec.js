const {PageManager} = require('../PageObject/PageManager')
const {test, expect} = require('@playwright/test')
const data = JSON.parse(JSON.stringify(require('../TestData/ContactUsData.json')))

let pageManager;
let homePage;
let contactUsPage;
let loginPage;

test.beforeEach(async ({page})=>{

    pageManager = new PageManager(page)

    homePage = pageManager.getHomePage()

    contactUsPage = pageManager.getContactUsPage()

    loginPage = pageManager.getLoginPage()

    await homePage.launchURL()

})

test('ContactUs Test without Login', async ()=>{

    await homePage.navigateToContactUsPage()

    const successTextMessage = await contactUsPage.sendAMessageWithoutLogin(data.subjectHeading,data.email,data.message)

    expect(successTextMessage).toContain(data.successMessage)

})

test('ContactUs Test with Login', async ()=>{

    await homePage.navigateToLogin()

    await loginPage.doLogin(data.email, data.password)

    await homePage.navigateToContactUsPage()

    const {email,successTextMessage} = await contactUsPage.sendAMessageWithLogin(data.subjectHeading,data.message)

    expect(email).toEqual(data.email)

    expect(successTextMessage).toContain(data.successMessage)
    

})