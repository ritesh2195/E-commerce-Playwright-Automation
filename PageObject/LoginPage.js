class LoginPage{

    constructor(page){

        this.page = page

        this.emailInput = this.page.locator('#email')

        this.passwordInput = this.page.locator('#passwd')

        this.signInButton = this.page.locator('#SubmitLogin')

        this.userName = this.page.locator('.header_user_info span')

        this.signOutLink = this.page.locator('"Sign out"')
    }

    async doLogin(email, password){

        await this.emailInput.fill(email)

        await this.passwordInput.fill(password)

        await this.signInButton.click()
    }

    async validateLogin(){

        const loginUserDetails = {}

        loginUserDetails.userName = await this.userName.textContent()

        loginUserDetails.pageTitle = await this.page.title()

        loginUserDetails.signOutLinkVisible =  this.signOutLink.first()

        return loginUserDetails

    }
}

module.exports = {LoginPage}