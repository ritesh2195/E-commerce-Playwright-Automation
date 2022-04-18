const {test, expect} = require('@playwright/test')
const { PageManager } = require('../PageObject/PageManager')
const dataSet = JSON.parse(JSON.stringify(require('../TestData/LoginData.json')))

for(const data of dataSet){
test(`${data.name}`, async({browser})=>{

    const context = await browser.newContext()

    const page = await context.newPage()

    const pm = new PageManager(page)

    const hp = pm.getHomePage()

    await hp.launchURL()

    await hp.navigateToLogin()

    const lp = pm.getLoginPage()

    await lp.doLogin(data.userName, data.password)

    if(data.name==='Login with Valid credential'){

    const loginDetails = await lp.validateLogin()

    const {userName, signOutLinkVisible} = loginDetails;

    expect(await lp.validatePageTitle()).toEqual('My account - My Store')

    expect(userName).toEqual('abc def')

    await signOutLinkVisible.isVisible()

}   

    else if(data.name==='Login with Invalid credential'){

        expect(await lp.validatePageTitle()).toEqual('Login - My Store')

    }
})
}