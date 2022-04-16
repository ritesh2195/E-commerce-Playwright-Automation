const {test, expect} = require('@playwright/test')
const {HomePage} = require('../PageObject/HomePage')
const {LoginPage} = require('../PageObject/LoginPage')

test('Login Test', async({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    const hp = new HomePage(page)

    await hp.launchURL()

    await hp.navigateToLogin()

    const lp = new LoginPage(page)

    await lp.doLogin('rrm21@gmail.com', 'password')

    const loginDetails = await lp.validateLogin()

    const {userName, pageTitle, signOutLinkVisible} = loginDetails;

    expect(pageTitle).toEqual('My account - My Store')

    expect(userName).toEqual('abc def')

    signOutLinkVisible.isVisible()

})