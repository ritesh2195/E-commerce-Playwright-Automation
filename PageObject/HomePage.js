class HomePage{

    constructor(page){

        this.page = page;

        this.signinLink = this.page.locator('"Sign in"')

    }

    async launchURL(){

        await this.page.goto('http://automationpractice.com/index.php')
    }

    async navigateToLogin(){

        await this.signinLink.click()
    }
}

module.exports = {HomePage}