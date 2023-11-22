import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';
class SearchLanguagePage {
    [x: string]: any;
    page: Page;
    btnStartCoding: Locator;
    searchBar : Locator;
    topSearch : Locator;
    noLanguageFound :Locator;
    deleteButton : Locator;
    searchResult : Locator;

constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.searchBar= page.locator("//input[@placeholder='Search Language']")
    this.topSearch =page.locator("//span[@id='codeSearchDropdown']")
    this.noLanguageFound = page.locator("//p[contains(text(),'No language found.')]")
    this.deleteButton = page.locator("(//*[local-name()='svg'])[74]")
    this.searchResult = page.locator("(//span[contains(text(),'Python2')])[1]")
    
}

async navigate() {
    await this.page.goto('/');

    this.btnStartCoding.click();
  }

  async menuClick_StartCoding() {

    await this.btnStartCoding.click()

  }
async clickOnSearchbar()
{
    //await this.searchBar.check();
    await this.searchBar.click();
    await this.page.waitForTimeout(3000);
    //await this.searchBar.fill("abc");
}
async fillInSearchBar()
{
    await this.searchBar.fill("abc");
    await this.page.waitForTimeout(10000);
}
async fillValidInput()
{
    await this.searchBar.fill("Py");
    await this.page.waitForTimeout(10000);
}

}
export default SearchLanguagePage ;
