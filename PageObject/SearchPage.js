class SearchPage {

    constructor(page){

        this.page = page

        this.searchInput = this.page.locator('#search_query_top')

        this.searchButton = this.page.locator("button[name='submit_search']")

        this.selectedProduct = this.page.locator("h5[itemprop='name'] a")
    }

    async searchProduct(product){

        await this.searchInput.type(product)

        await this.searchButton.click()

    }

    async chooseProduct(product){

        await this.page.locator(`(//h5[@itemprop='name']//a[contains(text(),'${product}')])[1]`).click()

    }
}

module.exports = {SearchPage}