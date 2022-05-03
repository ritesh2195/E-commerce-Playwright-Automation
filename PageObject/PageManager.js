const { AccountPage } = require("./AccountPage")
const { AddressPage } = require("./AddressPage")
const { CartPage } = require("./CartPage")
const { ContactUsPage } = require("./ContactUsPage")
const { HomePage } = require("./HomePage")
const { LoginPage } = require("./LoginPage")
const { OrderHistory } = require("./OrderHistoryPage")
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

        this.accountPage = new AccountPage(page)

        this.orderHistoryPage = new OrderHistory(page)

        this.contactUsPage = new ContactUsPage(page)
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

    getAccountPage(){

        return this.accountPage;
    }

    getOrderHistoryPage(){

        return this.orderHistoryPage;
    }

    getContactUsPage(){

        return this.contactUsPage;
    }

}

module.exports = {PageManager}