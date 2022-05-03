class HomePage{

    constructor(page){

        this.page = page;

        this.signinLink = this.page.locator('"Sign in"')

        this.contactUsPageLink = this.page.locator("[title='Contact Us']")

    }

    async launchURL(){

        await this.page.goto('http://automationpractice.com/index.php')
    }

    async navigateToLogin(){

        await this.signinLink.click()
    }

    async navigateToContactUsPage(){

        await this.contactUsPageLink.click()
    }
}

module.exports = {HomePage}