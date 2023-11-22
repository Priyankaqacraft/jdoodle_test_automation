import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import { time } from 'console';
import { PageGroupProjectionFromJSON } from 'mailslurp-client';
import { Options } from 'prettier';

class StudentsAPI {  
  page: Page;
  btnDashboard: Locator;
  menuAPIs: Locator;
  textAPIPlan: Locator;
  btnSubscribeNow: Locator;
  linkSeePlan: Locator;
  textPlatformPlan: Locator;
  textClientId: Locator;
  textClientSecret: Locator;
  textAccountDetails: Locator;
  textNotSubscribe: Locator;
  btnPlatform: Locator;
  btnAPI: Locator;
  btnGetStarted: Locator;
  textCreaditPerDay: Locator;
  inputCardNumber: Locator;
  inputMMYY: Locator;
  inputCVC: Locator;
  inputZIP: Locator;
  textPricingPlan: Locator;
  btnSubscribe: Locator;
  btnManagePlan: Locator;
  btnPaymentDetails: Locator;
  btnPaymentHistory: Locator;
  btnRefreshCount: Locator;
  btnContactUs: Locator;
  frameLocator: Locator;





  constructor(page: Page) {
    this.page = page;
    this.btnDashboard = page.locator("//span[text()='Dashboard']")
    this.menuAPIs = page.locator("//span[text()='APIs']")
    this.textAPIPlan = page.locator("//h3[contains(text(), 'API Plan')]")
    this.btnSubscribeNow = page.locator("//a[contains(text(),' Subscribe now ')]")
    this.textClientId = page.locator("(//div[@class='mb-1'])[1]")
    this.textClientSecret = page.locator("(//div[@class='mb-1'])[2]")
    this.linkSeePlan = page.locator("//a[contains(text(),'See Plan')]")
    this.textPlatformPlan = page.locator("//h3[contains(text(), 'Platform Plan')]")
    this.textAccountDetails = page.locator("//p[contains(@class,'mb-3.5')]")
    this.textNotSubscribe = page.locator("//p[contains(text(),'Not Subscribed')]")
    this.btnPlatform = page.locator("//button[contains(text(),'Platform')]")
    this.btnAPI = page.locator("//button[contains(text(),'API')]")
    this.btnGetStarted = page.locator("//button[contains(text(), ' Get Started ')]")
    this.textCreaditPerDay = page.locator("//div[contains(@class,'flex-rows md:flex-cols flex gap-4')]")
    this.inputCardNumber = page.locator("//input[@name='cardnumber']")
    this.inputMMYY = page.locator("//input[@name='exp-date']")
    this.inputCVC = page.locator("//input[@name='cvc']")
    this.inputZIP = page.locator("//input[@name='postal']")
    this.textPricingPlan = page.locator("//h2[contains(text(),'Pricing plans for all use cases')]")
    this.btnSubscribe = page.locator("//button[contains(text(),' Subscribe ')]")
    this.btnManagePlan = page.locator("//a[contains(text(),'Manage Plan')]")
    this.btnPaymentDetails = page.locator("//span[contains(text(),'Payment Details')]")
    this.btnPaymentHistory = page.locator(" //a[contains(text(),' Payment history ')]")
    this.btnRefreshCount = page.locator(" //button[contains(text(),' Refresh Count ')]")
    this.btnContactUs = page.locator(" //a[contains(text(),' Contact Us ')]")
   // this.frameLocator = page.locator("Please find Xpath of frame")

        
    page.setViewportSize({ width: 1920, height: 1080 })
  }

  async navigate() {

    await this.page.goto('/');

  } 
  async btnClick_Dashboard() {

    await this.btnDashboard.click();

  }
  async menuClick_APIs() {

    await this.menuAPIs.click()

  }
  async Click_LinkSeePlan() {

    await this.linkSeePlan.click()

  }
  async btnClick_SubscribeNow() {

    await this.btnSubscribeNow.click()

  }
  async btnClick_API() {

    await this.btnAPI.click()

  }
  async btnClick_GetStarted() {

    await this.btnGetStarted.click()

  }
  async btnClick_Subscribe() {

    await this.btnSubscribe.click()

  }
  async btnClick_PaymentDetails() {

    await this.btnPaymentDetails.click()

  }
  async btnClick_PaymentHistory() {

    await this.btnPaymentHistory.click()

  }
  async FillCardNumber()
  {
  
    await this.inputCardNumber.fill('4242424242424242')
      
  }  
  async FillMMYY()
  {
  
    await this.inputMMYY.fill('01/24')
      
  }  
  async FillCVC()
  {
  
    await this.inputMMYY.fill('123')
      
  }
  async FillZIP()
  {
  
    await this.inputZIP.fill('12345')
      
  }
  async switchToFrameByXpath(frameLocator: Locator) {    
    const frame = await this.page.waitForSelector(frameLocator.toString());
    await this.page.waitForTimeout(1000);
    await this.page.waitForLoadState('networkidle')
    return frame;
  }

}
export default StudentsAPI;        