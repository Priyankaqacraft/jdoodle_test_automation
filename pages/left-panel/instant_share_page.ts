import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import { Options } from 'prettier';

class Instant_Share {
    
    page: Page;
    btnStartCoding: Locator;
    menuOpenClose: Locator;
    menuInstantShare: Locator;
    textInstantShare: Locator;
    btnGetShareUrls: Locator;

    

    constructor(page: Page) {
        this.page = page;
        this.btnStartCoding = page.locator("(//a[contains(text(),'Start Coding')])[1]")
        this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
        this.menuInstantShare = page.locator("//span[contains(text(),'Instant Share')]")
        this.textInstantShare = page.locator("//h1[contains(text(),'Instant Share (No Login/Save required)')]")
        this.btnGetShareUrls =page.locator("//button[contains(text(),' Get Share Url')]")

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
  async menuClick_InstantShare() {

    await this.menuInstantShare.click()

  }
  async menuClick_btnGetShareUrls() {

    await this.btnGetShareUrls.click()

  }
}
export default Instant_Share;