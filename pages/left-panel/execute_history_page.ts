import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';

class ExecuteHistoryPage {
  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuExecuteHistory: Locator;
  select_box_searchLanguage: Locator;
  btnToggle: Locator;
  btnClose: Locator;
  btnOpen: Locator;
  btnRecentExecutionRecord: Locator;
  codeEditor: Locator;
  btnExecute: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuExecuteHistory = page.locator("//span[text()='Execute History']")
    this.select_box_searchLanguage = page.locator("//input[@placeholder='Search Language']")
    this.btnToggle= page.locator("(//input[@type='checkbox'])[1]")
    this.btnClose= page.locator("(//input[@type='checkbox']//following::button[text()=' Close '])[1]")
    this.btnRecentExecutionRecord= page.locator("//p[text()='Recent Executions']//following::button[1]//span")
    this.btnOpen= page.locator("(//button[text()=' Open '])[1]")
    this.codeEditor= page.locator("//div[@id='myExecuteHistoryCodeEditor']")
    this.btnExecute= page.locator("//button[text()=' Execute ']")

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

  async menuClick_ExecuteHistory() {

    await this.menuExecuteHistory.click()

  }

  async mouseHoverOn_ExecuteHistory() {

    await this.menuExecuteHistory.hover()

  }

  async select_option_From_Dropdown(dropdown: Locator, option: string) {
    await dropdown.selectOption({ label: option });
  }

  async pressEscapeKey(page: Page, buttonName: string) {

    await page.getByRole('button', { name: buttonName }).press('Escape');
    const keyboard = page.keyboard;
    await keyboard.press('Escape');

}

async click_recentExecutionHistory() {
  await this.page.waitForTimeout(2000);  
  await this.btnRecentExecutionRecord.click()
}

async click_closeButton() {
  await this.btnClose.click()
}

async click_executeButton() {
  await this.btnExecute.click()
  await this.page.waitForTimeout(2000);
}

}
export default ExecuteHistoryPage;
