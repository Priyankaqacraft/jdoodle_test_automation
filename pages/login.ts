import {Page, Locator} from '@playwright/test'


class LoginPage
{
    page:Page;
    inputEmail: Locator;
    inputPassword: Locator;
    btnLogin: Locator;
    btnLoginSubmit: Locator;
    btnDashboard: Locator;
    constructor(page: Page){
        this.page=page;
        this.inputEmail = page.locator('(//input[@type="email"])[1]')
        this.inputPassword = page.locator('//input[@id="login_pwd"]')
        this.btnLogin = page.locator('//button//div[text()=" Login "]')
        this.btnLoginSubmit = page.locator('//button[@type="submit" and text()=" Login "]')
        this.btnDashboard = page.locator('//span[text()="Dashboard"]')

    }

    async navigate() {
        await this.page.goto('/');
      }


   async loginWithValidCredentials(email: string, password: string)
    {

        await this.btnLogin.click()
        await this.inputEmail.fill(email)
        await this.inputPassword.fill(password)
        await this.page.waitForTimeout(2000)
        await this.btnLoginSubmit.click()
    }   
}

export default LoginPage;

