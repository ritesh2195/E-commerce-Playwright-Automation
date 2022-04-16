class LoginPage{

    constructor(page){

        this.page = page

        this.emailInput = this.page.locator('#email')

        this.passwordInput = this.page.locator('#passwd')

        this.signInButton = this.page.locator('#SubmitLogin')
    }

    async doLogin(email, password){

        await this.emailInput.fill(email)

        await this.passwordInput.fill(password)

        await this.signInButton.click()
    }
}

module.exports = {LoginPage}