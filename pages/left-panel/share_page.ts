import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import { Options } from 'prettier';


class SharePage {
    
  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuEditableShare: Locator;
  btnLogin: Locator;
  btnClose: Locator;
  btnSave: Locator;
  btnMyProject: Locator;
  btnCloseEditable: Locator;
  inputProjectName: Locator;
  inputPlaceHolder: Locator;
  btnSaveProject: Locator;
  btnSaveAs: Locator;
  btnCloseSavepage: Locator;
  clickOnProject: Locator;
  displayCode: Locator;
  btnOpen: Locator;
  btnRemove: Locator;
  btnCloseMyProject: Locator;
  btnDashboard: Locator;
  btnLogOut: Locator;
  btnYes: Locator;
  btnNo: Locator;
  btnGetShareUrls: Locator;
  textShareUrl: Locator;
  textEmbedUrl: Locator;
  btnUnshareUrls: Locator;
  btnCloseShareUrls: Locator;


  
  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("(//a[contains(text(),'Start Coding')])[1]")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuEditableShare = page.locator("//span[text()='Editable Share']")
    this.btnLogin = page.locator("//p[contains(text(), 'logged')]/following::button[1]")
    this.btnClose = page.locator("//p[contains(text(), 'logged')]/following::button[2]")
    this.btnSave = page.locator("//p[contains(text(),'Please save')]/following::button[1]")
    this.btnMyProject = page.locator("//p[text()='Please save the project or open a project to share.']/following::button[2]")
    this.btnCloseEditable = page.locator("//p[text()='Please save the project or open a project to share.']/following::button[3]")
    this.btnMyProject = page.locator("//p[text() ='Please save the project or open a project to share.']/following::button[2]")
    this.inputProjectName = page.locator("//p[contains(text(), 'required')]/preceding-sibling::div/child::input")
    this.inputPlaceHolder = page.locator("(//input[@type = 'string'])[2]")
    this.btnSaveProject = page.locator("//button[@type ='submit' and text() = 'Save']")
    this.btnSaveAs = page.locator("//button[@type='submit' and text()='Save As']")
    this.btnCloseSavepage = page.locator("//button[@type='submit' and text()='Save As']/following-sibling::button")
    this.clickOnProject =page.locator("//p[contains(text(), 'Your Projects')]/following::span[1]")
    this.displayCode = page.locator("(//div[@class='ace_content'])[1]")
    this.btnOpen = page.locator("(//button[contains(text(),' Open ')])[2]")
    this.btnCloseMyProject = page.locator("(//button[@class='btn-secondary btn-rounded-md'][normalize-space()='Close'])[3]")
    this.btnDashboard = page.locator("(//span[normalize-space()='Dashboard'])[1]")
    this.btnLogOut = page.locator("//span[contains(text(),'Logout')]")
    this.btnRemove = page.locator("(//button[normalize-space()='Remove'])[1]")
    this.btnYes = page.locator("(//button[@data-hs-overlay='#hs-confirm'][normalize-space()='Yes'])[1]")
    this.btnNo = page.locator("(//button[@data-hs-overlay='#hs-confirm'][normalize-space()='No'])[1]")
    this.btnGetShareUrls = page.locator("(//button[contains(text(),' Get Share Url')])[1]")
    this.textShareUrl = page.locator("//span[contains(text(),'Share URL')]")
    this.textEmbedUrl = page.locator("//span[contains(text(),'Embed URL')]")
    this.btnUnshareUrls = page.locator("//button[contains(text(),' Unshare Url')]")
    this.btnCloseShareUrls = page.locator("(//button[contains(text(),' Get Share Url')])[1]/following-sibling::button")


    

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
  async menuClick_EditableShare() {

    await this.menuEditableShare.click()

  }
  async btnClick_Login() {

    await this.btnLogin.click()

  }
  async btnClick_Save() {

    await this.btnSave.click()

  }
  async btnClick_MyProject() {

    await this.btnMyProject.click()

  }
  async btnClick_CloseEditable() {

    await this.btnCloseEditable.click()

  }
  async btnClick_CloseLogin() {

    await this.btnClose.click()

  }
  async input_ProjectName(projectName : string) {

    await this.inputPlaceHolder.fill(projectName)

  }
  async btnClick_SaveProject() {

    await this.btnSaveProject.click()

  }
  async btnClick_SaveAs() {

    await this.btnSaveAs.click()

  }
  async btnClick_CloseSaveProject() {

    await this.btnCloseSavepage.click()

  }
  async btnClick_Project() {

    await this.clickOnProject.click()

  }
  async open_Project() {

    await this.btnOpen.click()

  }
  async btnClose_MyProject() {

    await this.btnCloseMyProject.click()

  }
  async btnClick_Dashboard() {

    await this.btnDashboard.click()

  }
  async btnClick_LogOut() {

    await this.btnLogOut.click()

  }
  async btnClick_Remove() {

    await this.btnRemove.click()

  }
  async btnClick_Yes() {

    await this.btnYes.click()

  }
  async btnClick_GetShareUrl() {

    await this.btnGetShareUrls.click()

  }
  async linkClick_ShareUrl() {

    await this.textShareUrl.click()

  }
  async btnClick_UnshareUrl() {

    await this.btnUnshareUrls.click()

  }
  async btnClick_CloseShareUrls() {

    await this.btnCloseShareUrls.click()

  }
  async openNewTab() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.click('a[target=_blank]');
  } 
  async pasteText() {
    const textbox = 'textbox';
    await this.page.keyboard.press('Control+V');
  }
  async clear2Cookies() {
  this.page.context();
  const context = this.page.context();
  await context.clearCookies();
  }
   
}

export default SharePage;