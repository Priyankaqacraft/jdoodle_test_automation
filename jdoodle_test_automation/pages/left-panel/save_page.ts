import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test';
import { Options } from 'prettier';


class SharePage {
    
  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuSave: Locator;
  btnLogin: Locator;
  btnClose: Locator;
  inputProjectName: Locator;
  btnSave: Locator;
  btnToggle: Locator;
  btnSaveAgain: Locator;
  btnSaveAs: Locator;
  btnCloseSavePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("(//a[contains(text(),'Start Coding')])[1]")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuSave = page.locator("//span[text()='Save']")
    this.btnLogin = page.locator("//p[contains(text(), 'logged')]/following::button[1]")
    this.btnClose = page.locator("//p[contains(text(), 'logged')]/following::button[2]")
    this.inputProjectName = page.locator("//input[contains(@placeholder, 'Project Name')]")
    this.btnSave = page.locator("//label[contains(text(),'Project Name')]/following::button[1]")
    this.btnToggle = page.locator("(//input[@id='hs-basic-with-description-checked'])[2]")
    this.btnSaveAgain = page.locator("//button[contains(text(),'Save Again')]")
    this.btnSaveAs = page.locator("//button[contains(text(), 'Save As')]")
    this.btnCloseSavePage = page.locator("//button[contains(text(), 'Save As')]/following-sibling::button")
    

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
async menuClick_Save() {

    await this.menuSave.click()

  }
  async input_ProjectName(projectName : string) {

    await this.inputProjectName.fill(projectName)

  }
  async btnClick_Save() {

    await this.btnSave.click()

  }
  async btnClick_SaveAgain() {

    await this.btnSaveAgain.click()

  }
  async btnClick_SaveAs() {

    await this.btnSaveAs.click()

  }
  async btnClick_CloseSavePage() {

    await this.btnCloseSavePage.click()

  }
  async btnClick_Close() {

    await this.btnClose.click()

  }

}

export default SharePage;