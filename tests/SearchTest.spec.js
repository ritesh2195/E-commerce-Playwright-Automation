const {test, expect} = require('@playwright/test')
const { PageManager } = require('../PageObject/PageManager')
const data = JSON.parse(JSON.stringify(require('../TestData/SearchProductData.json')))

test('@search Search product Test', async({page})=>{

    const pageManager = new PageManager(page)

    const homePage = pageManager.getHomePage()

    await homePage.launchURL()

    await homePage.navigateToLogin()

    const loginPage = pageManager.getLoginPage()

    await loginPage.doLogin(data.email, data.password)

    const searchPage = pageManager.getSearchPage()

    await searchPage.searchProduct(data.searchProduct)

    await searchPage.chooseProduct(data.selectProduct)

    const productDetailsPage = pageManager.getProductDetailsPage()

    const priceDetails = await productDetailsPage.chooseProductType((data.quantity).toString(), data.size)

    const ProductDetails = await productDetailsPage.verifySelectedProductDetails()

    const {successTextMessage} = ProductDetails;

    expect(successTextMessage).toContain(data.successText)

    await productDetailsPage.navigateToCartPage()

    const cartPage = pageManager.getCartPage()

    const {totalProductPriceInCartPage, productNameInCart, productColorSizeCart} = await cartPage.verifyProductInCart()

    expect(data.quantity*priceDetails).toEqual(totalProductPriceInCartPage)

    expect(productNameInCart).toEqual(data.selectProduct)

    expect(productColorSizeCart).toContain(data.size)

    await cartPage.navigateToAddressPage()

    const addressPage = pageManager.getAddressPage()

    await addressPage.navigateToShippingPage()

    const shippingPage = pageManager.getShippingPage()

    await shippingPage.navigateToPaymentPage()

    const paymentPage = pageManager.getPaymentPage()

    await paymentPage.makePayment(data.paymentMethod)

    const {confirmOrderText, orderInfoText} = await paymentPage.verifyOrderConfirmation()

    expect(confirmOrderText).toEqual(data.confirmOrderMessage)
})