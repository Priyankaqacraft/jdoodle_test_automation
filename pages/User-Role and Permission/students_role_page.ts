import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'

class StudentsRole {
    
    page: Page;
    btnDashboard: Locator;
    textMyProject: Locator;
    textSeeMore: Locator;
    btnArrowicon: Locator;
    textIdeheading: Locator;
    btnEyeicon: Locator;
    textProjectPerview: Locator;  
    btnTrashicon: Locator; 
    textConfirmation: Locator;
    linkSeeMore: Locator;
    textPlatfromPlan: Locator;
    linkManagePlan: Locator;
    linkSeePlan: Locator;
    btnCreateInstitute: Locator;
    textMyInstitute: Locator;
    textCreateInstitute: Locator;
    textMyAssignmentasaStudent: Locator;
    textAllMyAssignment: Locator;
    textMyAssociations: Locator;
    linkSeeMore2: Locator;
    institutions: Locator;
    textInstitutionsPage: Locator;
    menuMyProject: Locator;   
    searchBar: Locator;
    projectList: Locator;
    btnFiltericon: Locator;
    dropdownSelectLanguage: Locator;
    textCreated: Locator;
    datepickerCreated: Locator;
    textModified: Locator;
    datepickerModified: Locator;
    btnApplyFilters: Locator;
    linkClear: Locator;
    menuVirtualInstitutions: Locator;
    menuHome: Locator;
    textInvitations: Locator;
    linkSeemore3: Locator;
    textMyInvitations: Locator;
    menuMyAssignment: Locator;
    clickAssignment: Locator;
    textAssignmentName: Locator;
    textAssignmentDescription: Locator;
    btnAttendAssignment: Locator;
    countQuestionsAns: Locator;
    btnAttendAssignment2: Locator;
    answerSections: Locator;
    btnPaymentDetails: Locator;
    btnActivePlan: Locator;
    btnUpgrade: Locator;
    btnCard: Locator;
    btnUpdateMyCard: Locator;
    btnContactUs: Locator;
    textContactUs: Locator;
    btnPaymentHistory: Locator;
    menuMyAssociations: Locator;
    inputSearchbar: Locator;
    institutions2: Locator;
    btnNext: Locator;
    btnPrevious: Locator;
    btnReviewAssignment: Locator;
    clickChooseAns1: Locator;
    clickChooseAns2: Locator;
    btnSubmitAssignment: Locator;
    btnYes: Locator;
    btnViewAssignment: Locator;
    btnBacktoSummary: Locator;
    btnViewAssignment2 : Locator;
    textTotalMarks: Locator;
    textareaComment: Locator;
    btnRequestforReEvaluation: Locator;
    btnYes2: Locator;
    menuInvitations: Locator;
    clickInvitation: Locator;
    clickAccept: Locator;
    textDoNotInvitation: Locator;
    btnStartCoding: Locator;
    btnUpdate: Locator;



    constructor(page: Page) {
        this.page = page;
        this.btnDashboard = page.locator("//span[text()='Dashboard']")
        this.textMyProject = page.locator("//h3[contains(text(),'My Projects')]")
        this.textSeeMore = page.locator("(//a[contains(text(),'SEE MORE')])[1]")
        this.btnArrowicon = page.locator("((//div[@class='grow'])[1]//following-sibling::button)[1]")
        this.textIdeheading = page.locator("//h1[contains(@class,'heading-medium md:leading-tight')]")
        this.btnEyeicon = page.locator("//*[local-name()='svg' and @data-icon='eye']")
        this.textProjectPerview = page.locator("//h3[contains(text(),'Project Preview')]")
        this.btnTrashicon = page.locator("//*[local-name()='svg' and @data-icon='trash']")
        this.textConfirmation = page.locator("//p[text()='Are you sure, do you want to delete this project?']")
        this.linkSeeMore = page.locator("//a[contains(text(),'See More')]")
        this.textPlatfromPlan = page.locator("//h3[contains(text(),'Platform Plan')]")
        this.linkManagePlan = page.locator("//a[contains(text(),'Manage Plan')]")
        this.linkSeePlan = page.locator("//a[contains(text(),'See Plan')]")
        this.btnCreateInstitute = page.locator("(//button[contains(text(),' Create Institute')])[2]")
        this.textMyInstitute = page.locator("//h3[contains(text(),'My Institute')]")
        this.textCreateInstitute = page.locator("//h1[contains(text(),'Create Virtual Institute')]")
        this.textMyAssignmentasaStudent = page.locator("//h3[contains(text(),'My Assignments as a Student')]")
        this.textAllMyAssignment = page.locator("//h3[contains(text(),'All My Assignments')]")
        this.textMyAssociations = page.locator("//h3[contains(text(),'My Associations')]")
        this.linkSeeMore2 = page.locator("(//a[contains(text(),'SEE MORE')])[2]")
        this.institutions = page.locator("(//div[@class ='col-span-1'])[1]")
        this.textInstitutionsPage = page.locator("(//h3[contains(@class,'inline-block text-lg font-medium')])[1]")
        this.menuMyProject = page.locator("//span[contains(text(),'Start Coding')]//following::span[1]")
        this.searchBar = page.locator("//input[@id='searchBar']")
        this.projectList = page.locator("//div[contains(@class,'section-combined overscroll-auto rounded-xl')]")
        this.btnFiltericon = page.locator("//*[local-name()='svg' and @fill='none']")
        this.dropdownSelectLanguage = page.locator("//div[@class='multiselect-wrapper']")
        this.textCreated = page.locator("//div[text()='Created']")
        this.datepickerCreated = page.locator("//div[text()='Created']//following-sibling::div")
        this.textModified = page.locator("//div[text()='Modified']")
        this.datepickerModified = page.locator("//div[text()='Modified']//following-sibling::div")
        this.btnApplyFilters = page.locator("//button[contains(text(),' Apply Filters ')]")
        this.linkClear = page.locator("//div[contains(text(),'clear')]")
        this.menuVirtualInstitutions = page.locator("//span[contains(text(),'Virtual Institutions')]")
        this.menuHome = page.locator("//a[contains(text(),' Home ')]")
        this.textInvitations = page.locator("//h3[text()='Invitations']")
        this.linkSeemore3 = page.locator("//h3[text()='Invitations']//following::div[1]")
        this.textMyInvitations = page.locator("//h3[contains(text(),'My Invitations')]")
        this.menuMyAssignment = page.locator("//a[contains(text(),' My Assignments ')]")
        this.clickAssignment = page.locator("//span[@class='break-normal']")
        this.textAssignmentName = page.locator("//span[contains(text(),'Assignment Description')]/preceding::h2")
        this.textAssignmentDescription = page.locator("//span[contains(text(),'Assignment Description')]")
        this.btnAttendAssignment = page.locator("//a[contains(text(),'Attend Assignment')]")
        this.countQuestionsAns = page.locator("//p[contains(text(),' Questions answered: 0/1')]")
        this.btnAttendAssignment2 = page.locator("//span[contains(text(),'Attend Assignment')]")
        this.answerSections = page.locator("//div[@class='my-5']")
        this.btnPaymentDetails = page.locator("//span[contains(text(),'Payment Details')]")
        this.btnActivePlan = page.locator("//a[contains(text(),' Active Plans ')]")
        this.btnUpgrade = page.locator("(//a[contains(text(),' Upgrade ')])[1]")
        this.btnCard = page.locator("//a[contains(text(),' Cards ')]")
        this.btnUpdateMyCard = page.locator("//button[contains(text(),' Update my card information ')]")
        this.btnContactUs = page.locator("//a[contains(text(),' Contact Us ')]")
        this.textContactUs = page.locator("//a[contains(text(),' Contact Us ')]//preceding-sibling::p")
        this.btnPaymentHistory = page.locator("//a[contains(text(),' Payment history ')]")
        this.menuMyAssociations = page.locator("//a[contains(text(),' My Associations ')]")
        this.inputSearchbar = page.locator("//input[@placeholder='Search']")
        this.institutions2 = page.locator("(//tr[@class='section-secondary'])[1]")
        this.btnNext = page.locator("//button[contains(text(),' Next ')]")
        this.btnPrevious = page.locator("//button[contains(text(),' Previous ')]")
        this.btnReviewAssignment = page.locator("(//button[contains(text(),' Review assignment ')])[2]")
        this.clickChooseAns1 = page.locator("//input[@id='1']") 
        this.clickChooseAns2 = page.locator("//input[@id='true_radio']")
        this.btnSubmitAssignment = page.locator("//p[@class='mb-2']//following-sibling::button")
        this.btnYes = page.locator("//button[text()='Yes']")
        this.btnViewAssignment = page.locator("//span[contains(text(),'View Assignment')]")
        this.btnBacktoSummary = page.locator("//button[contains(text(),' Back to Summary ')]")
        this.btnViewAssignment2 = page.locator("//a[contains(text(),'View Assignment')]")
        this.textTotalMarks = page.locator("//p[@class='mb-2']")
        this.textareaComment = page.locator("//div[@class='grow']//following::textarea")
        this.btnRequestforReEvaluation = page.locator("//p[@class='mb-2']//following-sibling::button")
        this.btnYes2 = page.locator("//p[contains(text(),'Do you want to request for re-evaluation?')]//following::button[1]")
        this.menuInvitations = page.locator("//a[contains(text(),' Invitations ')]")
        this.clickInvitation = page.locator("//tr[@class='section-secondary']")
        this.clickAccept = page.locator("//button[contains(text(),' Accept ')]")
        this.textDoNotInvitation = page.locator("//div[contains(text(),'You do not have any invitations ')]")
        this.btnStartCoding = page.locator("//span[contains(text(),'Start Coding')]")
        this.btnUpdate = page.locator("//button[text()='Update']")
        


        page.setViewportSize({ width: 1920, height: 1080 })
    }

    async navigate() {
        await this.page.goto('/');

    }
    async btnClick_Dashboard() {

        await this.btnDashboard.click();
    }
    async btnClick_Arrowicon() {

        await this.btnArrowicon.click();
    }
    async btnClick_Eyeicon() {

        await this.btnEyeicon.click();
    }
    async btnClick_Trashicon() {

        await this.btnTrashicon.click();
    }
    async linkClick_SeeMore() {

        await this.linkSeeMore.click();
    }
    async linkClick_ManagePlan() {

        await this.linkManagePlan.click();
    }
    async linkClick_SeePlan() {

        await this.linkSeePlan.click();
    }
    async btnClick_CreateInstitute() {

        await this.btnCreateInstitute.click();
    }
    async linkClick_SeeMore2() {

        await this.linkSeeMore2.click();
    }
    async Click_Institutions() {

        await this.institutions.click();
    }
    async menuClick_MyProject() {

        await this.menuMyProject.click();
    }
    async btnClick_FilterIcon() {

        await this.btnFiltericon.click();
    }
    async linkClick_SeeMore3() {

        await this.linkSeemore3.click();
    }
    async menuClick_VirtualInstitutions() {

        await this.menuVirtualInstitutions.click();
    }
    async menuClick_Home() {

        await this.menuHome.click();
    }
    async menuClick_MyAssignment() {

        await this.menuMyAssignment.click();
    }
    async Click_Assignment() {

        await this.clickAssignment.click();
    }
    async btnClick_AttendAssignment() {

        await this.btnAttendAssignment.click();
    }
    async btnClick_AttendAssignment2() {

        await this.btnAttendAssignment2.click();
    }
    async btnClick_PaymentDetails() {

        await this.btnPaymentDetails.click();
    }
    async btnClick_Card() {

        await this.btnCard.click();
    }
    async btnClick_PaymentHistory() {

        await this.btnPaymentHistory.click();
    }
    async menuClick_MyAssiciations() {

        await this.menuMyAssociations.click();
    }
    async Click_Institutions2() {

        await this.institutions2.click();
    }
    async btnClick_Next() {

        await this.btnNext.click();
    }
    async btnClick_Previous() {

        await this.btnPrevious.click();
    }
    async btnClick_ReviewAssignment() {

        await this.btnReviewAssignment.click();
    }
    async Click_ChooseAns1() {

        await this.clickChooseAns1.click();
    }
    async Click_ChooseAns2() {

        await this.clickChooseAns2.click();
    }
    async btnClick_SubmitAssignment() {

        await this.btnSubmitAssignment.click();
    }
    async btnClick_Yes() {

        await this.btnYes.click();
    }
    async btnClick_ViewAssignment() {

        await this.btnViewAssignment.click();
    }
    async btnClick_BacktoSummary() {

        await this.btnBacktoSummary.click();
    }
    async btnClick_ViewAssignment2() {

        await this.btnViewAssignment2.click();
    }
    async btnClick_RequestForReEvaluation() {

        await this.btnViewAssignment2.click();
    }
    async btnClick_Yes2() {

        await this.btnYes2.click();
    }
    async menuClick_Invitations() {

        await this.menuInvitations.click();
    }
    async Click_Invitation() {

        await this.clickInvitation.click();
    }
    async Click_Accept() {

        await this.clickAccept.click();
    }
    async btnClick_ActivePlan() {

        await this.btnActivePlan.click();
    }
    async btnClick_StartCoding() {

        await this.btnStartCoding.click();
    }
    async btnClick_UpdateMyCard() {

        await this.btnUpdateMyCard.click();
    }
    async btnClick_Update() {

        await this.btnUpdate.click();
    }
    async SearchBar_Fill(text : string) {

        await this.searchBar.fill(text);
    }
    async inputSearchBar_Fill(inputSearchbar : string) {

        await this.searchBar.fill(inputSearchbar);
    }
    async SkipStep() {

        const skipSearch = this.textDoNotInvitation

        if (await skipSearch.isVisible()) {
            console.log('Step skipped due to condition.');
            return;
        }
        else 
        {
            await this.searchBar.fill('School');
            await expect(this.page.getByText('School')).toBeVisible();
        }
        
    }

}
export default StudentsRole;  