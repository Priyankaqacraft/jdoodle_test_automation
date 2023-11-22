import { Page, Locator, Keyboard, expect } from '@playwright/test'
import { Options } from 'prettier';

class SaveToLocalFile {

  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuSaveToLocalFile: Locator;
  textSaveToLocalFile: Locator;
  btnDownload: Locator;
  btnClose: Locator;


  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuSaveToLocalFile = page.locator("//span[text()='Save (to local file)']")
    this.textSaveToLocalFile = page.locator("//h1[text() = 'Save (to local file)']")
    this.btnDownload = page.locator("//button[text() = 'Download']")
    this.btnClose = page.locator("(//button[text() = ' Close '])[7]")

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
  async menuClick_SaveToLocal() {

    await this.menuSaveToLocalFile.click()

  }
  async Click_Download() {

    await this.btnDownload.click()

  }
  async Click_Close() {

    await this.btnClose.click()

  }

}

export default SaveToLocalFile;