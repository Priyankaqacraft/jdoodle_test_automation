import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';

class LeftPanelPage {

  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuExternalLibrary: Locator;
  menuExecuteHistory: Locator;
  menuNewProject: Locator;
  menuMyProject: Locator;
  menuCollaborate: Locator;
  menuSave: Locator;
  menuOpenFromLocalFile: Locator;
  menuSaveToLocalFile: Locator;
  menuEditableShare: Locator;
  menuInstantShare: Locator;
  menuCopyToClipBoard: Locator;
  menuPreetyPrint: Locator;
  menuHowToFaq: Locator;
  textMenu: Locator;
  btnLogin: Locator;
  btnClose: Locator;
  headingLogin: Locator;
  select_box_searchLanguage: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuExternalLibrary = page.locator("//span[text()='External Libraries']")
    this.menuExecuteHistory = page.locator("//span[text()='Execute History']")
    this.menuNewProject = page.locator("//span[text()='New Project']")
    this.menuMyProject = page.locator("//span[text()='My Projects']")
    this.menuCollaborate = page.locator("//span[text()='Collaborate']")
    this.menuSave = page.locator("//span[text()='Save']")
    this.menuOpenFromLocalFile = page.locator("//span[text()='Open (from local file)']")
    this.menuSaveToLocalFile = page.locator("//span[text()='Save (to local file)']")
    this.menuEditableShare = page.locator("//span[text()='Editable Share']")
    this.menuInstantShare = page.locator("//span[contains(text(),'Instant Share')]")
    this.menuCopyToClipBoard = page.locator("//span[text()='Copy to Clipboard']")
    this.menuPreetyPrint = page.locator("//span[text()='Pretty Print']")
    this.menuHowToFaq = page.locator("//span[text()='How To/FAQ']")
    this.textMenu = page.locator("//span[text()='Menu']")
    this.btnLogin = page.locator("//p[contains(text(),'logged in first.')]//following::button[text()=' Login ']")
    this.headingLogin = page.locator("//h1[text()='Please Login']")
    this.select_box_searchLanguage = page.locator("//input[@placeholder='Search Language']")
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

  async menuClick_ExternalLibrary() {

    await this.menuExternalLibrary.click()

  }

  async menuClick_ExecuteHistory() {

    await this.menuExecuteHistory.click()

  }

  async mouseHoverOn_ExecuteHistory() {

    await this.menuExecuteHistory.hover()

  }

  async menuClick_NewProject() {

    await this.menuNewProject.click()

  }

  async menuClick_MyProject() {

    await this.menuMyProject.click()

  }


  async menuClick_Collaborate() {

    await this.menuCollaborate.click()

  }


  async menuClick_Save() {

    await this.menuSave.click()

  }

  async menuClick_OpenFromLocal() {

    await this.menuOpenFromLocalFile.click()

  }



  async menuClick_SaveToLocal() {

    await this.menuSaveToLocalFile.click()

  }

  async menuClick_EditableShare() {

    await this.menuEditableShare.click()

  }


  async menuClick_InstantShare() {

    await this.menuInstantShare.click()

  }


  async menuClick_CopyToClipboard() {

    await this.menuCopyToClipBoard.click()

  }

  async menuClick_PreetyPrint() {

    await this.menuPreetyPrint.click()

  }

  async menuClick_HowFaq() {

    await this.menuHowToFaq.click()

  }

  async click_BtnClose() {
    await this.btnClose.click()
  }


  async pressEscapeKey(page: Page, buttonName: string) {

    await page.getByRole('button', { name: buttonName }).press('Escape');
    const keyboard = page.keyboard;
    await keyboard.press('Escape');

}

async select_option_From_Dropdown(dropdown: Locator, option: string) {
  await dropdown.selectOption({ label: option });
}

}

export default LeftPanelPage;






