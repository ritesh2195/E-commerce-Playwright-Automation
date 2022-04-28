const {test, expect} = require('@playwright/test')
const { PageManager } = require('../PageObject/PageManager')
const dataSet = JSON.parse(JSON.stringify(require('../TestData/LoginData.json')))

for(const data of dataSet){
test(`${data.testName}`, async({page})=>{

    const pageManager = new PageManager(page)

    const homePage = pageManager.getHomePage()

    await homePage.launchURL()

    await homePage.navigateToLogin()

    const loginPage = pageManager.getLoginPage()

    await loginPage.doLogin(data.email, data.password)

    if(data.name==='Login with Valid credential'){

    const loginDetails = await loginPage.validateLogin()

    const {userName, signOutLinkVisible} = loginDetails;

    expect(await loginPage.validatePageTitle()).toEqual(data.tabHeader)

    expect(userName).toEqual(data.userName)

    await signOutLinkVisible.isVisible()

}   

    else if(data.name==='Login with Invalid credential'){

        expect(await loginPage.validatePageTitle()).toEqual(data.tabHeader)

    }
})
}