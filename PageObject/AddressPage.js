class AddressPage{

    constructor(page){

        this.page = page

        this.proceedToCheckOut = this.page.locator('"Proceed to checkout"')

        this.deliveryAddress = this.page.locator('#address_delivery')

        this.billingAddress = this.page.locator('#address_invoice')
    }
}