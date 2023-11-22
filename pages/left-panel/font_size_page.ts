import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';

class FontSizePage {
  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  fontSize: Locator;
  ideScreen: Locator;
  fontSizeSelected: Locator;
   
  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.fontSize = page.locator("//select[@id='fontSizeSelect']")
    //this.fontSizeSelected =page.locator("//select[@id='fontSizeSelect']//child::option")
    this.ideScreen = page.locator("//div[@id='code']")

  }
  async navigate() {
    await this.page.goto('/');

    this.btnStartCoding.click();
  }


  async menuClick_StartCoding() {

    await this.btnStartCoding.click()

  }

  async menuClick_OpenClose() {

    await this.menuOpenClose.click()

  }
  async fontSize_Click() {

    await this.fontSize.click()
    
  }
 async IDEscreen() {
    await this.ideScreen.check()
 }
 async fontsize_Selected(fontSize:Locator, Options:string){

    //await this.fontSize.click()
    await fontSize.selectOption({label:Options})
    await this.page.waitForTimeout(20000);
 
 }
}
export default FontSizePage;