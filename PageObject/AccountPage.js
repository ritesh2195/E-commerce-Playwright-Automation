class AccountPage{

    constructor(page){

        this.page = page

        this.orderHistory = this.page.locator('"Order history and details"')
    }

    async navigateToOrderPage(){

        await this.orderHistory.click()

    }

}

module.exports = {AccountPage}