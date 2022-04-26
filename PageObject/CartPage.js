class CartPage{

    constructor(page){

        this.page = page;

        this.totalProductPrice = this.page.locator('#total_product')

        this.productName = this.page.locator('.cart_description .product-name a')

        this.productColorSize = this.page.locator('.cart_description small a')

        this.proceedToCheckoutButton = this.page.locator("[title='Proceed to checkout']:nth-child(1)")
    }

    async verifyProductInCart(){

        await this.page.mouse.move(0,200)

        const productCart = {}

        const price = await this.totalProductPrice.textContent()

        productCart.totalProductPriceInCartPage = Number.parseFloat(price.substring(1))

        productCart.productNameInCart = await this.productName.textContent()

        productCart.productColorSizeCart = await this.productColorSize.textContent()

        return productCart;

    }

    async navigateToAddressPage(){

        await this.proceedToCheckoutButton.click()
    }

}

module.exports = {CartPage}