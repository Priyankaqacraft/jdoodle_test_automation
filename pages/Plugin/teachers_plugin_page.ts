import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import { time } from 'console';
import { PageGroupProjectionFromJSON } from 'mailslurp-client';
import { Options } from 'prettier';


class TeachersPlugin {  
  page: Page;
  btnDashboard: Locator;
  btnPlugin: Locator;
  textUsername: Locator;
  textActivePlan: Locator;
  textTeamPlan: Locator;
  btnViewEdit: Locator;
  btnClone: Locator;
  btnShowEmbedCode: Locator;
  btnUpgradePlan: Locator; //Change
  btnCreateNewPlugin: Locator;
  inputPluginName: Locator;
  inputDescription: Locator;
  btnCreatePlugin: Locator;
  breadCrumb: Locator;
  textBetaVersion: Locator; 
  textPluginName: Locator;
  textdescription: Locator;
  textCreatedOn: Locator;
  textLastEditOn: Locator;
  btnRemane: Locator;
  btnRenamePlugin: Locator; 
  btnDelete: Locator;
  btnYes: Locator;
  btnNo: Locator;
  btnDeactivate: Locator;
  btnAcivate: Locator;
  dropdownlanguage: Locator;
  dropdownVersion: Locator;
  textComponents: Locator;    
  textHeader: Locator;
  textFile: Locator;
  textFunctionalFeatures: Locator;
  featureGetCode: Locator;
  featureSetCode: Locator;
  featureExecute: Locator;
  featureGetFiles: Locator;
  textareaprogram: Locator;
  dropdownversion2: Locator;
  checkboxInteractive: Locator;
  textareaStdin: Locator;
  textareaCommandLine: Locator;
  btnExecute: Locator;
  btnUpload: Locator;
  textareaResult: Locator;
  btnSavePlugin: Locator;
  btnReset: Locator;
  textSuccess: Locator;
  textEmbedCode: Locator;
  textarea3linecode: Locator;
  btnCopytoClipboard: Locator;  
    

  constructor(page: Page) {
    this.btnDashboard = page.locator("//span[text()='Dashboard']")
    this.btnPlugin = page.locator("//span[text()='Plugins']")
    this.textUsername = page.locator("//h2[contains(text(),'Welcome!')]")
    this.textActivePlan = page.locator("//p[contains(text(),'Active')]")
    this.textTeamPlan = page.locator("//span[contains(text(),'Team')]")
    this.btnViewEdit = page.locator("//button[contains(text(),' View/Edit ')] ")
    this.btnClone = page.locator("//button[contains(text(),' Clone ')]")
    this.btnShowEmbedCode = page.locator("//button[contains(text(),' Show Embed Code ')]")
    this.btnUpgradePlan = page.locator("//button[contains(text(),'Upgrade Plan')]")
    this.btnCreateNewPlugin = page.locator("//button[contains(text(),' Create New Plugin ')]")
    this.inputPluginName = page.locator("//input[contains(@id,'Plugin NameMy plugin 1')]")
    this.inputDescription = page.locator("//input[contains(@id,'Plugin DescriptionDescription')]")
    this.btnCreatePlugin = page.locator("//button[@type='submit' and text()=' Create Plugin ']")
    this.breadCrumb = page.locator("//nav[contains(@class,'flex justify-between py-4 w-full')]")
    this.textBetaVersion = page.locator("//div[contains(@class,'flex h-fit items-center gap-1 rounded-lg border border-btn-primary px-1')]")
    this.textPluginName = page.locator("(//h3[contains(@class,'inline-block text-lg font-medium')])[1]")
    this.textdescription = page.locator("//p[contains(@class,'p-medium mb-2 flex-1 break-all')]")
    this.textCreatedOn = page.locator("//p[contains(text(),'Created on')]")
    this.textLastEditOn = page.locator("//p[contains(text(),'Last edited on')]")
    this.btnRemane = page.locator("(//button[contains(text(),' Rename ')])[2]")
    this.btnRenamePlugin = page.locator("//button[contains(text(),' Rename Plugin ')]")
    this.btnDelete = page.locator("//button[contains(text(),'Delete')]")
    this.btnYes = page.locator("//button[contains(text(),'Yes')]")
    this.btnNo = page.locator("//button[contains(text(),'No')]")
    this.btnDeactivate = page.locator("//button[contains(text(),'Deactivate')]")
    this.btnAcivate = page.locator("//button[contains(text(),'Activate')]")
    this.dropdownlanguage = page.locator("//select[@id='languageSelect']")
    this.dropdownVersion = page.locator("(//select[@id='versionSelect'])[1]")
    this.textComponents = page.locator("//p[contains(text(),'Drag and drop components to the plugin view')]")
    this.textHeader = page.locator("//h4[contains(text(),'Header')]")
    this.textFile = page.locator("//h4[contains(text(),'Files')]")
    this.textFunctionalFeatures = page.locator("//p[contains(text(),' Drag and drop host to plugin functional features to the plugin view ')]")
    this.featureGetCode = page.locator("//h4[contains(text(),'Get Code')]")
    this.featureSetCode = page.locator("//h4[contains(text(),'Set Code')]")
    this.featureExecute = page.locator("//h4[contains(text(),'Execute')]")
    this.featureGetFiles = page.locator("//h4[contains(text(),'Get Files')]")
    this.textareaprogram = page.locator("(//div[@class='ace_content'])[1]")
    this.dropdownversion2 = page.locator("(//select[@id='versionSelect'])[2]")
    this.checkboxInteractive = page.locator("//input[@id='hs-basic-with-description-checked']")
    this.textareaStdin = page.locator("(//p[contains(text(),'Stdin Inputs')])[2]//following::textarea[1]")
    this.textareaCommandLine = page.locator("//p[contains(text(),'CommandLine Arguments')]//following-sibling::input")
    this.btnExecute = page.locator("(//button[contains(text(),' Execute ')])[2]")
    this.btnUpload = page.locator("//button[contains(@class,'btn btn-secondary w-fit min-w-fit')]")
    this.textareaResult = page.locator("(//div[@class='ace_content'])[2]")
    this.btnSavePlugin = page.locator("//button[contains(text(),'Save Plugin')]")
    this.btnReset = page.locator("//button[contains(text(),'Reset')]")
    this.textSuccess = page.locator("//div[contains(@class,'text-secondary h-full w-full')]/p[2]")
    this.textEmbedCode = page.locator("//h3[contains(text(),'Embeded Code')]")
    this.textarea3linecode = page.locator("//h3[contains(text(),'Integrate Jdoodle Plugin with Simple 3 lines of Code')]")
    this.btnCopytoClipboard = page.locator("//button[contains(text(),' Copy to Clipboard ')]")      


    page.setViewportSize({ width: 1920, height: 1080 })    
  }

  async navigate() {

    await this.page.goto('/');

  } 
  async btnClick_Dashboard() {

    await this.btnDashboard.click();

  }
  async btnClick_Plugin() {

    await this.btnPlugin.click();

  }
  async btnClick_CreateNewPlaugin() {

    await this.btnCreateNewPlugin.click();

  }
  async btnClick_CreatePlugin() {

    await this.btnCreatePlugin.click();

  }
  async btnClick_SavePlugin() {

    await this.btnSavePlugin.click();

  }
  async btnClick_Rename() {

    await this.btnRemane.click();

  }
  async btnClick_RenamePlugin() {

    await this.btnRenamePlugin.click();

  }
  async btnClick_Delete() {

    await this.btnDelete.click();

  }
  async btnClick_Yes() {

    await this.btnYes.click();

  }
  async btnClick_Deactivate() {

    await this.btnDeactivate.click();

  }
  async btnClick_ViewEdit() {

    await this.btnViewEdit.click();

  }
  async btnClick_Clone() {

    await this.btnClone.click();

  }
  async btnClick_ShowEmbedCode() {

    await this.btnShowEmbedCode.click();

  }

  async input_PlauginName(plugin : string) {

    await this.btnCreateNewPlugin.fill(plugin);

  }
  async input_Description(description : string) {

    await this.btnCreateNewPlugin.fill(description);

  }
  async switchToFrameByXpath(frameLocator: Locator) {    
    const frame = await this.page.waitForSelector(frameLocator.toString());
    await this.page.waitForTimeout(1000);
    await this.page.waitForLoadState('networkidle')
    return frame;
  }
  async Drag_and_Drop_Components() {    
    const source = this.page.locator("//h4[contains(text(),'Header')]").first()
    const target = this.page.locator("//h4[contains(text(),'Files')]").first()
    await source.dragTo(target)
  }

  async Drag_and_Drop_Functional_Features() {    
    const source = this.page.locator("//h4[contains(text(),'Get Code')]").first()
    const target = this.page.locator("(//div[@class='ace_content'])[1]").first()
    await source.dragTo(target)
  }
}
export default TeachersPlugin;    
