class ProductDetailsPage{

    constructor(page){

        this.page = page

        this.productSize = this.page.locator('#group_1')

        this.productQuantity = this.page.locator('#quantity_wanted')

        this.productColor = this.page.locator('#color_7')
    }
}