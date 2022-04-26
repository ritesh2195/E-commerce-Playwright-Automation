const { AddressPage } = require("./AddressPage")
const { CartPage } = require("./CartPage")
const { HomePage } = require("./HomePage")
const { LoginPage } = require("./LoginPage")
const { PaymentPage } = require("./PaymentPage")
const { ProductDetailsPage } = require("./ProductDetailsPage")
const { SearchPage } = require("./SearchPage")
const { ShippingPage } = require("./ShippingPage")

class PageManager{

    constructor(page){

        this.page = page

        this.loginPage = new LoginPage(page)

        this.homePage = new HomePage(page)

        this.searchPage = new SearchPage(page)

        this.productDetailsPage = new ProductDetailsPage(page)

        this.cartPage = new CartPage(page)

        this.addressPage = new AddressPage(page)

        this.shippingPage = new ShippingPage(page)

        this.paymentPage = new PaymentPage(page)
    }

    getHomePage(){

        return this.homePage;
    }

    getLoginPage(){

        return this.loginPage;
    }

    getSearchPage(){

        return this.searchPage;
    }

    getProductDetailsPage(){

        return this.productDetailsPage;
    }

    getCartPage(){

        return this.cartPage;
    }

    getAddressPage(){

        return this.addressPage;
    }

    getShippingPage(){

        return this.shippingPage;
    }

    getPaymentPage(){

        return this.paymentPage;
    }

}

module.exports = {PageManager}