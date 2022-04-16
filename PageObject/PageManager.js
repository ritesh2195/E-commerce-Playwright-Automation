const { HomePage } = require("./HomePage")
const { LoginPage } = require("./LoginPage")

class PageManager{

    constructor(page){

        this.page = page

        this.loginPage = new LoginPage(page)

        this.homePage = new HomePage(page)
    }

    getHomePage(){

        return this.homePage;
    }

    getLoginPage(){

        return this.loginPage;
    }

}

module.exports = {PageManager}