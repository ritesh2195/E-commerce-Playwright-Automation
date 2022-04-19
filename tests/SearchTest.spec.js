const {test, expect} = require('@playwright/test')
const { PageManager } = require('../PageObject/PageManager')

test('Search product Test', async({page})=>{

    const pageManager = new PageManager(page)

    const homePage = pageManager.getHomePage()

    await homePage.launchURL()

    await homePage.navigateToLogin()

    const loginPage = pageManager.getLoginPage()

    await loginPage.doLogin('rrm21@gmail.com', 'password')

    const searchPage = pageManager.getSearchPage()

    await searchPage.searchProduct('dress')

    await searchPage.chooseProduct('Printed Summer Dress')

    const productDetailsPage = pageManager.getProductDetailsPage()

    const priceDetails = await productDetailsPage.chooseProductType("2", 'S')

    const ProductDetails = await productDetailsPage.verifySelectedProductDetails()

    const {successTextMessage} = ProductDetails;

    expect(successTextMessage).toContain('Product successfully added to your shopping cart')

    await productDetailsPage.navigateToCartPage()

    const cartPage = pageManager.getCartPage()

    const cartDetails = await cartPage.verifyProductInCart()

    const {totalProductPriceInCartPage} = cartDetails;

    expect(2*priceDetails).toEqual(totalProductPriceInCartPage)

})