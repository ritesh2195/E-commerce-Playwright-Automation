class PaymentPage{

    constructor(page){

        this.page = page

        this.payByWire = this.page.locator("[title='Pay by bank wire']")

        this.payByCheck = this.page.locator("[title='Pay by check.']")

        this.confirmOrderButton = this.page.locator('"I confirm my order"')

        this.confirmOrderText = this.page.locator('.cheque-indent strong')

        this.orderInfo = this.page.locator('.box')
    }

    async makePayment(method){

        if(method==='Bank Wire'){

            await this.payByWire.click()
        }

        else if(method=='Check'){

            await this.payByCheck.click()
        }

        this.page.waitForNavigation()

        await this.confirmOrderButton.click()
    }

    async verifyOrderConfirmation(){

        const orderDetails = {}

        orderDetails.confirmOrderText = await this.confirmOrderText.textContent()

        orderDetails.orderInfoText = await this.orderInfo.textContent()

        return orderDetails;
    }
}

module.exports = {PaymentPage}