import { Page, Locator, Keyboard, expect } from '@playwright/test'
import { Options } from 'prettier';

class FaqPage {

  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuHowToFaq: Locator;
  context: any;


  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuHowToFaq = page.locator("//span[text()='How To/FAQ']")

    page.setViewportSize({ width: 1920, height: 1080 })

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

  async menuClick_HowFaq() {

    await this.menuHowToFaq.click()
    await this.page.waitForTimeout(2000);

  }
  async newTab () {

    //Switch Tab
    
    const context = this.page.context();
    const pages = context.pages();
    const newTabPage = pages[1]; 

    await newTabPage.waitForLoadState('load');

    }

}

export default FaqPage;