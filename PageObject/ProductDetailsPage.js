class ProductDetailsPage{

    constructor(page){

        this.page = page

        this.productSize = this.page.locator('#group_1')

        this.productQuantity = this.page.locator('#quantity_wanted')

        this.productColor = this.page.locator("[title='Orange']")

        this.addToCartButton = this.page.locator('"Add to cart"')

        this.productPrice = this.page.locator('#our_price_display')

        this.productAddedSuccessText = this.page.locator("[title='Close window'] ~ h2")

        this.totalPrice = this.page.locator('.ajax_block_products_total')

        this.proceedToCheckOutButton = this.page.locator('"Proceed to checkout"')

    }

    async chooseProductType(quantity, size){

        await this.productQuantity.fill(quantity)

        await this.productSize.selectOption({label: size})

        await this.productColor.click()

        const price = await this.productPrice.textContent()

        const priceDetailsPage = Number.parseFloat(price.substring(1))

        await this.addToCartButton.click()

        return priceDetailsPage;
    }

    async verifySelectedProductDetails(){

        const selectedProductDetails = {}

        selectedProductDetails.successTextMessage = await this.productAddedSuccessText.textContent()

        return selectedProductDetails;
    }

    async navigateToCartPage(){

        await this.proceedToCheckOutButton.click()

    }

}

module.exports = {ProductDetailsPage}