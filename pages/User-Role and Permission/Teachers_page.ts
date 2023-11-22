import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';
class TeacherPage {
    [x: string]: any;
    page: Page;
    landingPageLoginButton :Locator;
    emailAddressTextBox : Locator;
    passwordTextBox : Locator;
    loginButton :Locator;
    myProjectHeadingText : Locator;
    seeMoreLink : Locator;
    projectNam : Locator;
    dashboardbutton : Locator;
    codePreviewSection : Locator;
    deleteButton : Locator;
    closeButton : Locator;
    myAssignmentSeeMoreLink : Locator;
    managePlanLink : Locator;
    plansPageReactiveButton : Locator;
    plansPageUpgradeLink : Locator;
    seePlanLink : Locator;
    apiPlanPageReactiveButton : Locator;
    apiPlanPageUpgradeLink : Locator;
    virtualInstituteName : Locator;
    numOfEnrolledStud : Locator;
    numOfAssignment : Locator;
    createAssignment : Locator;
    myAssoSeeMoreLink : Locator;
    associationName : Locator;
    associationPage : Locator;
    myInstitueOption : Locator;
    myInstituteSeeMoreLink :Locator;
    createAssignmentButton : Locator;
    userMgmtManagebutton : Locator;
    userMgmtAddUserButton : Locator;





    constructor(page: Page) {
        this.page = page;
        this.dashboardbutton = page.locator("//span[contains(text(),'Dashboard')]")
        this.landingPageLoginButton = page.locator("((//div[contains(@class,'lg:gap-10')])[1]/child::button)[2]")
        this.emailAddressTextBox = page.locator("(//div[@class='relative'])[1]/child::input")
        this.passwordTextBox = page.locator("(//div[@class='relative'])[2]/child::input")
        this.loginButton = page.locator("//button[contains(text(),'Login')]")

        //XPath for 'My Project' section [16-11-23]
        this.myProjectHeadingText = page.locator("//h3[contains(text(),'Projects')]")
        this.seeMoreLink = page.locator("(//a[@href='/dashboard/project'])[2]")
        this.projectName = page.locator("(//div[@class='grow']/child::div/child::div/child::div/child ::div)[1]")
        this.arrowIcon=page.locator("( (//div[@class='grow'])[1]//following-sibling::button)[1]")
        this.eyeIcon = page.locator("(//*[local-name()='svg' and @data-icon='eye'])[1]")
        this.trashIcon = page.locator("(//*[local-name()='svg' and @data-icon='trash'])[1]")
        this.deleteButton = page.locator("//button[contains(text(),'Delete')]")
        this.closeButton = page.locator("//button[contains(text(),'Close')]")
        this.codePreviewSection = page.locator("//div[@class='ace_content']")

         //XPath for 'My Assignment' section [16-11-23]
         this.myAssignmentSeeMoreLink = page.locator("(//a[@href='/dashboard/institution/assignments'])[2]")


          //XPath for 'Platoform Plan' section [16-11-23] 
          this.managePlanLink = page.locator("//a[contains(text(),'Manage Plan')]")
          this.plansPageReactiveButton = page.locator("(//button[contains(text(),' Re-activate ')])[1]")
          this.plansPageUpgradeLink = page.locator("(//a[contains(text(),' Upgrade ')])[1]")


          //Xpath for 'API' plan section
          this.seePlanLink = page.locator("//a[contains(text(),'See Plan')]")
          this.apiPlanPageReactiveButton = page.locator("(//button[contains(text(),' Re-activate ')])[2]")
          this.apiPlanPageUpgradeLink = page.locator("//a[contains(text(),' Upgrade ')])[2])")

          //Xpath for 'My Institute' section
          this.virtualInstituteName = page.locator("//p[contains(@class,'gap-5')]")
          this.numOfEnrolledStud = page.locator("(//p[contains(@class,'text-sm')])[1]")
          this.numOfAssignment = page.locator("(//p[contains(@class,'text-sm')])[2]")
          this.createAssignment = page.locator("//a[@href='/dashboard/institution/QAT/create-assignment']")

          //XPath for 'My Association' section
          this.myAssoSeeMoreLink = page.locator("(//a[@href='/dashboard/institution/associations'])[2]")
          this.associationName= page.locator("(//td[@class='rounded-s-lg px-3 py-4 text-sm'])[1]")
          this.associationPage = page.locator("(//div[contains(@class,'col-span-4')])[1]")

          //Xpath for leftside menu 'Virtual Institutions>>My Institute'
          this.myInstitueOption =page.locator("//a[contains(text(),' My Institute ')]")
          this.myInstituteSeeMoreLink = page.locator("//a[@href='/dashboard/institution/QAT/assignments']")
          this.createAssignmentButton = page.locator("//button[contains(text(),'Create Assignment')]")
          this.userMgmtManagebutton = page.locator ("//a[@href='/dashboard/institution/QAT/users']")
          this.userMgmtAddUserButton = page.locator("//button[contains(text(),'User')]")

    }

    async clear2Cookies() {
        this.page.context();
        const context = this.page.context();
        await context.clearCookies();
        }

        async login()
      {
        await this.landingPageLoginButton.click();
        await this.emailAddressTextBox.fill("te1@test.co");
        await this.passwordTextBox.fill(" Test123");
        await this.loginButton.click(); 
      }
      async dashboardbutton_Click()
      {
        await this.dashboardbutton.click();
      }


      //methods for 'dashboard >> My Project' section 
      async seeMoreLink_Click()
      {
        await this.seeMoreLink.click();
      }
      async eyeIcon_Click()
      {
        await this.eyeIcon.click();
      }
      async trashIcon_Click()
      {
        await this.trashIcon.click();
      }
      async deleteButton_Click()
      {
         await this.deleteButton.click();
      }
      async closeButton_click()
      {
        await this.closeButton.click();
      }
      async arrowIcon_Click()
      {
        await this.arrowIcon.click();
    
      }

      //methods for 'dashboard >> My Assignment' section 
      


      // methods for 'Dashboard >> PlatformPlan section
       async managePlankLink_Click()
       {
        await this.managePlanLink.click();
       }


       // methods for 'API Plan' section
       async seePlankLink_Click()
       {
        await this.seePlanLink.click();
       }

       // methods for 'My Institute' section
       async createAssignment_Click()
       {
        await this.createAssignment.click();
       }

       // Methods for 'My Association' section
       async myAssoSeeMoreLink_Click()
       {
        await this.myAssoSeeMoreLink.click();
       }
       async associationName_Click()
       {
           await this.associationName.click();
       }

       // Methods for leftside menu 'Virtual Institutions >> My Institute' started
       async myInstituteOption_Click()
       {
        await this.myInstitueOption.click();
       }
      async myInstituteSeeMoreLink_Click()
      {
        await this.myInstituteSeeMoreLink.click();
      }

       async createAssignmentButton_Click()
       {
        await this.createAssignmentButton.click();
       }
       async userMgmtManagebutton_Click()
       {
        await this.userMgmtManagebutton.click();
       }
       async userMgmtAddUserButton_Click()
       {
           await this.userMgmtAddUserButton.click();
       }

 }
 export default TeacherPage;
