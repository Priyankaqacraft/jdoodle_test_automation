import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';

class NewProjectPage {

  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;
  menuNewProject: Locator;
  labelNewProject: Locator;
  btnYes: Locator;
  btnNo: Locator;
  textMenu: Locator;
  textProgram: Locator;
  textAreaProgram: Locator;
  confiramtionPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
    this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
    this.menuNewProject = page.locator("//span[text()='New Project']")
    this.labelNewProject = page.locator("//h1[contains(text(),'New Project')]")
    this.btnYes = page.locator("//button[text()=' Yes ']")
    this.btnNo = page.locator("//button[text()=' No ']")
    this.textMenu = page.locator("//span[text()='Menu']")
    this.textProgram = page.locator("(//div[@class='ace_layer ace_text-layer'])[1]")
    this.confiramtionPopup = page.locator("(//div[@id='hs-confirm']//img[@alt='JDoodle'])[1]")
    this.textAreaProgram = page.locator("(//textarea[@class='ace_text-input'])[1]")

    page.setViewportSize({ width: 1920, height: 1080 })
    
    // page.setViewportSize({ width: 1260, height: 1080 })

    // page.setViewportSize({ width: 800, height: 600 })
    // page.setViewportSize({ width: 400, height: 300 })
    // page.setViewportSize({ width: 200, height: 150 })
    // page.setViewportSize({ width: 100, height: 75 })
    // page.setViewportSize({ width: 50, height: 37 })
    // page.setViewportSize({ width: 25, height: 18 })
    // page.setViewportSize({ width: 12, height: 9 })

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

  async menuClick_NewProject() {

    await this.menuNewProject.click()

  }

  async mouseHoverOn_NewProject() {

    await this.menuNewProject.hover()

  }

 async click_Yes_Button() {
    
    await this.btnYes.click()
    
 }

 async click_No_Button() {
    
    await this.btnNo.click()
    
 }

    async update_project_content() {          
        await this.textAreaProgram.fill("System.out.println(\"Hello World\");")
        
    }

}

export default NewProjectPage;