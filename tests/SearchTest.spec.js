const {test, expect} = require('@playwright/test')
const { PageManager } = require('../PageObject/PageManager')

test('Search product Test', async({page})=>{

    //page.locator('').textContent()

    const pageManager = new PageManager(page)

    const homePage = pageManager.getHomePage()

    await homePage.launchURL()

    //await page.waitForNavigation()

    await homePage.navigateToLogin()

    const loginPage = pageManager.getLoginPage()

    await loginPage.doLogin('rrm21@gmail.com', 'password')

    const searchPage = pageManager.getSearchPage()

    await searchPage.searchProduct('dress')

    await searchPage.chooseProduct('Printed Summer Dress')

    const productDetailsPage = pageManager.getProductDetailsPage()

    await productDetailsPage.chooseProductType("2", 0)

    const ProductDetails = await productDetailsPage.verifySelectedProductDetails()

    const {successTextMessage} = ProductDetails;

    console.log(successTextMessage)

    expect(successTextMessage).toContain('Product successfully added to your shopping cart')

})