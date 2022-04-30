class OrderHistory{

    constructor(page){

        this.page = page

        this.firstOrderId = this.page.locator('.first_item a.color-myaccount')
    }

    async getFirstOrderDetails(){

        const firstOrderDetails = {}

        firstOrderDetails.orderId = await this.firstOrderId.textContent()
    }

}

module.exports = {OrderHistory}