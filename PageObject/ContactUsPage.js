class ContactUsPage{

    constructor(page){

        this.page = page

        this.subjectHeading = this.page.locator('#id_contact')

        this.email = this.page.locator('#email')

        this.orderReference = this.page.locator("[name='id_order']")

        this.fileUpload = this.page.locator('#fileUpload')

        this.message = this.page.locator("[name='message']")

        this.sendButton = this.page.locator('#submitMessage')

        this.successMessage = this.page.locator('.alert.alert-success')
    }

    async sendAMessageWithoutLogin(heading, email, message){

        await this.subjectHeading.selectOption({label:heading})
        
        await this.email.fill(email)

        this.fileUpload.setInputFiles('upload.txt')

        await this.message.fill(message)

        await this.sendButton.click()

        return await this.successMessage.textContent()
    }

    async sendAMessageWithLogin(heading,message){

        await this.subjectHeading.selectOption({label:heading})
        
        const emailValue = await this.email.getAttribute('value')

        await this.orderReference.selectOption({index:1})

        await this.fileUpload.setInputFiles('upload.txt')

        await this.message.fill(message)

        await this.sendButton.click()

        const successText = await this.successMessage.textContent()

        const messageValidation = {email:emailValue, successTextMessage: successText}

        return messageValidation
    }
    
}

module.exports = {ContactUsPage}