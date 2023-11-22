import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';
class FullScreenPage {
    [x: string]: any;
    page: Page;
    btnStartCoding: Locator;
    loginButton : Locator;
    fullScreen : Locator;
    fullScreenButton : Locator;
    advancedJavaIde : Locator;


    constructor(page: Page) {
        this.page = page;
        this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
        this.fullScreenButton = page.locator("(//button[contains(@class,'rounded-md px-2 py-1 text-sm')])[1]")
        this.fullScreen = page.locator("(//*[local-name()='svg'])[59]")
      // this.loginButton = page.locator("(//*[local-name()='path'])[27]")
      this.advancedJavaIde = page.locator("(//a[@href='/online-java-compiler-ide/'])[2]")
    }

    async navigate() {
        await this.page.goto('/');
    
        this.btnStartCoding.click();
      }

      async menuClick_StartCoding() {

        await this.btnStartCoding.click()
    
      }

      async loginbutton()
      {
        await this.loginButton.isChecked()
      }

      async fullScreenButton_click()
      {
        await this.fullScreenButton.click()
        await this.page.waitForTimeout(3000);


      }

      
}
export default FullScreenPage;