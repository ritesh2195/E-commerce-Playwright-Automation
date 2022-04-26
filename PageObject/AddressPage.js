class AddressPage{

    constructor(page){

        this.page = page

        this.proceedToCheckOut = this.page.locator("[name='processAddress']")

        this.deliveryAddress = this.page.locator('#address_delivery')

        this.billingAddress = this.page.locator('#address_invoice')
    }

    async navigateToShippingPage(){

        await this.proceedToCheckOut.click()
    }
}

module.exports = {AddressPage}