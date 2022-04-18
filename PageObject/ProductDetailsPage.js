class ProductDetailsPage{

    constructor(page){

        this.page = page

        this.productSize = this.page.locator('#group_1')

        this.productQuantity = this.page.locator('#quantity_wanted')

        this.productColor = this.page.locator('#color_7')

        this.addToCartButton = this.page.locator('"Add to cart"')

        this.productPrice = this.page.locator('#our_price_display')

        this.productAddedSuccessText = this.page.locator("[title='Close window'] ~ h2")
    }

    async chooseProductType(quantity, size){

        this.productQuantity.fill(quantity)

        this.productSize.selectOption({value: size})

        this.productColor.click()
    }

}

module.exports = {ProductDetailsPage}