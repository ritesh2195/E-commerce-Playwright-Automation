class ProductDetailsPage{

    constructor(page){

        this.page = page

        this.productSize = this.page.locator('#group_1')

        this.productQuantity = this.page.locator('#quantity_wanted')

        this.productColor = this.page.locator("[title='Orange']")

        this.addToCartButton = this.page.locator('"Add to cart"')

        this.productPrice = this.page.locator('#our_price_display')

        this.productAddedSuccessText = this.page.locator("[title='Close window'] ~ h2")
    }

    async chooseProductType(quantity, size){

        await this.productQuantity.fill(quantity)

        await this.productSize.selectOption({index: size})

        await this.productColor.click()

        await this.addToCartButton.click()
    }

    async verifySelectedProductDetails(){

        const selectedProductDetails = {}

        selectedProductDetails.successTextMessage = await  this.productAddedSuccessText.textContent()

        return selectedProductDetails;
    }

}

module.exports = {ProductDetailsPage}