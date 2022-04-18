const { HomePage } = require("./HomePage")
const { LoginPage } = require("./LoginPage")
const { ProductDetailsPage } = require("./ProductDetailsPage")
const { SearchPage } = require("./SearchPage")

class PageManager{

    constructor(page){

        this.page = page

        this.loginPage = new LoginPage(page)

        this.homePage = new HomePage(page)

        this.searchPage = new SearchPage(page)

        this.productDetailsPage = new ProductDetailsPage(page)
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

}

module.exports = {PageManager}