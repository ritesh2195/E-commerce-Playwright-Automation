class ShippingPage{

    constructor(page){

        this.page = page

        this.termConditionText = this.page.locator('.checkbox label')

        this.termConditionCheckBox = this.page.locator("[type='checkbox']")

        this.proceedToCheckOutButton = this.page.locator("[name='processCarrier']")
    }

    async verifyTermCondition(){

        const text = await this.page.termConditionText.textContent()

        return text;
    }

    async navigateToPaymentPage(){

        this.termConditionCheckBox.click()

        this.proceedToCheckOutButton.click()
    }
}

module.exports ={ShippingPage}