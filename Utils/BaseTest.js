import {baseTest} from "@playwright/test"
import { HomePage } from "../PageObject/HomePage"
import { LoginPage } from "../PageObject/LoginPage"

exports.test = baseTest.extend<loginPage, homePage>({

    homePage: async ({page}, use) =>{

        await use(new HomePage(page))
    },
    
    loginPage: async ({page}, use) =>{

        await use(new LoginPage(page))
    }
})
