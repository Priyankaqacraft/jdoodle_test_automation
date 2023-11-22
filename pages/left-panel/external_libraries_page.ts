import { Page, Locator, Keyboard } from '@playwright/test'
import { info } from 'console';
import { Options } from 'prettier';

class ExternalLibraryPage {
  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuExternalLibrary: Locator;
  infoText1: Locator;
  infoText2: Locator;
  infoText3: Locator;
  urlSearchMaven: Locator;
  urlMavenRepo: Locator;
  btnClose: Locator;
  inputAddJar: Locator;
  btnAddLibrary: Locator;
  btnDelete: Locator;
  textExternalLibraries: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuExternalLibrary = page.locator("//span[text()='External Libraries']")
    this.infoText1 = page.locator("//button[text()=' Add Library ']//following::span[1]")
    this.infoText2 = page.locator("//button[text()=' Add Library ']//following::span[2]")
    this.infoText3 = page.locator("//button[text()=' Add Library ']//following::span[3]")
    this.urlSearchMaven = page.locator("//button[text()=' Add Library ']//following::a[1]")
    this.urlMavenRepo = page.locator("//button[text()=' Add Library ']//following::a[2]")
    this.btnClose = page.locator("(//button[text()=' Close '])[1]")
    this.inputAddJar = page.locator("//button[text()=' Add Library ']//preceding::input[1]")
    this.btnAddLibrary = page.locator("//button[text()=' Add Library ']")
    this.btnDelete = page.locator("//p[text()='Added Libraries']//following::button[1]")
    this.textExternalLibraries = page.locator("//h1[text()='External Libraries']")

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

  async mouseHoverOn_ExternalLibraries() {
      
      await this.menuExternalLibrary.hover()
  
    }

  async menuClick_ExternalLibrary() {

    await this.menuExternalLibrary.click()

  }

  async addLibrary() {  
    await this.inputAddJar.fill("org.apache.commons:commons-lang3:3.4")
    await this.btnAddLibrary.click()
  }

  async deleteLibrary() { 
    await this.btnDelete.click()
  }

  async click_closeButton() {

    await this.btnClose.click()

  }

}
export default ExternalLibraryPage;