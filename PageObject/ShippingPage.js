class ShippingPage{

    constructor(page){

        this.page = page

        this.termConditionText = this.page.locator('.checkbox label')

        this.termConditionCheckBox = this.page.locator("[type='checkbox']")

        this.proceedToCheckOutButton = this.page.locator("[name='processCarrier']")
    }

    async navigateToPaymentPage(){

        await this.termConditionCheckBox.click()

        await this.proceedToCheckOutButton.click()
    }
}

module.exports ={ShippingPage}