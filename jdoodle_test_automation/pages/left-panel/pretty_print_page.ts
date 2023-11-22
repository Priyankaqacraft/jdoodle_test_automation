import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test';
import { Options } from 'prettier';

class Pretty {
    
    page: Page;
    btnStartCoding: Locator;
    menuOpenClose: Locator;
    menuPreetyPrint: Locator;
    printContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnStartCoding = page.locator("(//a[contains(text(),'Start Coding')])[1]")
        this.menuOpenClose = page.locator("//span[text()=' Open/Close menu ']//parent::button")
        this.menuPreetyPrint = page.locator("//span[text()='Pretty Print']")
        this.printContainer = page.locator("//div[@id='sizer']")

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
      async menuClick_PrettyPrint() {
    
        await this.menuPreetyPrint.click()

      }
    }

    export default Pretty;  
