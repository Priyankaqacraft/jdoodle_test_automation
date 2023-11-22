import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright"
import LoginPage from '../../pages/login';
import StudentsRole from '../../pages/user-role-permissions/students_role_page';
import Save from '../../pages/left-panel/save_page'; 
import StudentsAPI from '../../pages/API/students_api_page';


test.describe.serial('StudentsRole', () => {

    let loginPage: LoginPage;
    let studentsRole: StudentsRole;
    let save_page: Save;
    let students_api_page: StudentsAPI;

    test.beforeEach(async ({ page }) => {
        studentsRole = new StudentsRole(page);
        await studentsRole.navigate();

        loginPage = new LoginPage(page);

        save_page = new Save(page);
        students_api_page = new StudentsAPI(page);
        
    });
    test('Testcase_001_VerifyLeftPanel_With_Login.', async ({ page }) => {

        await allure.step("Step_001_Enter Login Details", async () => {
        });
        await loginPage.loginWithValidCredentials("st@test.co", "Test123")

        await allure.step("Step_002_Verify Saved Project Name in My Project and My Project Dashboard Section", async () => {
        });
        await studentsRole.btnClick_Dashboard();
        await studentsRole.btnClick_StartCoding();
        await save_page.menuClick_OpenClose();
        await save_page.menuClick_Save();
        await save_page.input_ProjectName('java_project_1');
        await page.waitForTimeout(3000);
        await save_page.btnClick_Save();
        await page.keyboard.press('Escape');
        await studentsRole.btnClick_Dashboard();
        await expect(page.getByText('java_project_1')).toBeVisible();
        await page.waitForTimeout(3000);
        await studentsRole.menuClick_MyProject();
        await expect(page.getByText('java_project_1')).toBeVisible(); 
    });    

    test('Testcase_002_VerifyLeftPanel_With_Login.', async ({ page }) => {

        await allure.step("Step_001_Enter Login Details", async () => {
        });
        await loginPage.loginWithValidCredentials("st@test.co", "Test123");
        
        await allure.step("Step_002_Verify Dashboard My Project Section", async () => {
        });
        await studentsRole.btnClick_Dashboard();
        await studentsRole.textMyProject.isVisible();
        await studentsRole.textSeeMore.isVisible();

        await studentsRole.btnClick_Arrowicon();
        await studentsRole.textIdeheading.isVisible();

        await page.goBack();

        await studentsRole.btnClick_Eyeicon();
        await studentsRole.textProjectPerview.isVisible();

        await studentsRole.btnClick_Trashicon();
        await studentsRole.textConfirmation.isVisible();

        await allure.step("Step_003_Verify Dashboard My Assignment Section", async () => {
        });

        await studentsRole.textMyAssignmentasaStudent.isVisible();
        await studentsRole.linkClick_SeeMore();

        await studentsRole.textAllMyAssignment.isVisible();

        await page.goBack();

        await allure.step("Step_004_Verify Dashboard Platfrom Plan Section", async () => {
        });

        await studentsRole.textPlatfromPlan.isVisible();
        await expect(page.getByText('You are currently on a Team Plan')).toBeVisible();
        await studentsRole.linkClick_ManagePlan();
        await page.goBack();
        
        await allure.step("Step_005_Verify Dashboard API Plan Section", async () => {
        });

        await expect(page.getByText('API Plan')).toBeVisible();
        await studentsRole.linkClick_SeePlan();

        await allure.step("Step_006_Verify Dashboard My Institute Section", async () => {
        });

        await studentsRole.textMyInstitute.isVisible();
        await studentsRole.btnClick_CreateInstitute();
        
        await studentsRole.textCreateInstitute.isVisible();
        await page.keyboard.down('Escape');

        await allure.step("Step_007_Verify Dashboard My Associations Section", async () => {
        });

        await studentsRole.textMyAssociations.isVisible();
        await studentsRole.linkClick_SeeMore2();

        await page.goBack();

        await studentsRole.Click_Institutions();
        await studentsRole.textInstitutionsPage.isVisible();
    });

//     test('Testcase_003_Verify LeftPanel My Project.', async ({ page }) => {

//         await allure.step("Step_001_Enter Login Details", async () => {
//         });
//         await loginPage.loginWithValidCredentials("st@test.co", "Test123");

//         await allure.step("Step_002_Verify My Project page", async () => {
//         });
//         await studentsRole.btnClick_Dashboard();
//         await studentsRole.menuClick_MyProject();
//         await studentsRole.searchBar.isVisible();
//         await studentsRole.projectList.isVisible();
//         // await studentsRole.btnClick_Trashicon();
//         await studentsRole.btnClick_FilterIcon();
//         await studentsRole.textCreated.isVisible();
//         await studentsRole.datepickerCreated.isVisible();
//         await studentsRole.textModified.isVisible();
//         await studentsRole.datepickerModified.isVisible();
//         await studentsRole.btnApplyFilters.isVisible();

//         await allure.step("Step_003_Verify Virtual Institutions Home page", async () => {
//         });

//         await studentsRole.menuClick_VirtualInstitutions();
//         await studentsRole.menuClick_Home();

//         await studentsRole.textInvitations.isVisible();
//         await studentsRole.linkClick_SeeMore3();
//         await studentsRole.textMyInvitations.isVisible();
//         await studentsRole.SkipStep();

//         await allure.step("Step_004_Verify Virtual Institutions My Assignments page", async () => {
//         });

//         await studentsRole.menuClick_MyAssignment();
//         await studentsRole.inputSearchBar_Fill('Demo');
//         await expect(page.getByText('TestDemo')).toBeVisible();
//         await studentsRole.Click_Assignment();
//         await studentsRole.textAssignmentName.isVisible();
//         await studentsRole.textAssignmentDescription.isVisible();
//         await expect(page.getByText('Assignment Status:')).toBeVisible();
//         await expect(page.getByText('Submission Status:')).toBeVisible();
//         await studentsRole.btnClick_AttendAssignment();

//         await allure.step("Step_005_Verify Attend Assignments page", async () => {
//         });

//         await studentsRole.btnClick_AttendAssignment2();
//         await expect(page.getByText('Assignment:')).toBeVisible();
//         await expect(page.getByText('Virtual Institution:')).toBeVisible();
//         await expect(page.getByText('Assignment Status:')).toBeVisible();
//         await expect(page.getByText('Submission Status:')).toBeVisible();
//         await expect(page.getByText('All questions need to be answered prior to submission.')).toBeVisible();
//         await studentsRole.countQuestionsAns.isVisible();
//         await expect(page.getByText('Assignment')).toBeVisible();
//         await studentsRole.btnClick_AttendAssignment2();
//         await studentsRole.answerSections.isVisible();
         
//         await studentsRole.Click_ChooseAns1();
//         await studentsRole.btnClick_Next();
//         await studentsRole.Click_ChooseAns2();
//         await studentsRole.btnClick_Previous();
//         await studentsRole.clickChooseAns1.isChecked();

//         await studentsRole.btnClick_Next();
//         await expect(page.getByText('Question 02')).toBeVisible();
//         await studentsRole.btnClick_Previous();
//         await expect(page.getByText('Question 01')).toBeVisible();
//         await studentsRole.btnClick_ReviewAssignment();
//         await expect(page.getByText('Assignment Summary')).toBeVisible();

//         await studentsRole.btnClick_SubmitAssignment();
//         await studentsRole.btnClick_Yes();
//         await studentsRole.btnSubmitAssignment.isDisabled();

//         await studentsRole.btnClick_ViewAssignment();
//         await studentsRole.clickChooseAns1.isDisabled();
//         await studentsRole.btnClick_BacktoSummary();
//         await expect(page.getByText('Assignment')).toBeVisible();

//         await allure.step("Step_006_Verify After Evaluation Done from Teacher page", async () => {
//         });

//         await studentsRole.menuClick_MyAssignment();
//         await studentsRole.Click_Assignment();
//         await studentsRole.btnClick_ViewAssignment2();
//         await studentsRole.textTotalMarks.isVisible();
//         await studentsRole.btnClick_ViewAssignment();
//         await studentsRole.textareaComment.isDisabled();
//         await studentsRole.btnClick_RequestForReEvaluation();
//         await studentsRole.btnClick_Yes2();
//         await studentsRole.btnRequestforReEvaluation.isDisabled();
//         await studentsRole.textareaComment.isHidden();
//         await studentsRole.menuClick_VirtualInstitutions();
//         await studentsRole.menuClick_MyAssignment();
//         await studentsRole.btnClick_AttendAssignment();
//         await studentsRole.btnClick_AttendAssignment2();
//         await studentsRole.btnSubmitAssignment.isVisible();

//         await allure.step("Step_007_Verify Virtual Institutions My Associations page", async () => {
//         });

//         await studentsRole.menuClick_MyAssiciations();
//         await expect(page.getByText('My Associations')).toBeVisible();
//         await studentsRole.inputSearchBar_Fill('School');
//         await expect(page.getByText('TEST SCHOOL')).toBeVisible();
//         await studentsRole.Click_Institutions2();
//         await expect(page.getByText('TEST SCHOOL')).toBeVisible();

//         await allure.step("Step_008_Verify Virtual Institutions Invitations page", async () => {
//         });

//         await studentsRole.menuClick_VirtualInstitutions();
//         await studentsRole.menuClick_Invitations();
//         await expect(page.getByText('My Invitations')).toBeVisible();
//         await studentsRole.Click_Invitation();
//         await studentsRole.Click_Accept();
//         await studentsRole.btnClick_Yes();
//         await expect(page.getByText('Assignments')).toBeVisible();

//     });    
    // test('Testcase_004_Verify LeftPanel Payment Details.', async ({ page }) => {

    //     await allure.step("Step_001_Enter Login Details", async () => {
    //         });
    //     await loginPage.loginWithValidCredentials("st@test.co", "Test123");

    //     await allure.step("Step_002_Verify Active Plan page", async () => {
    //     });

    //     await studentsRole.btnClick_PaymentDetails();
    //     await studentsRole.btnClick_ActivePlan();
    //     await studentsRole.btnUpgrade.isVisible();


    //     await allure.step("Step_003_Verify Cards page", async () => {
    //     });
    //     await studentsRole.btnClick_Card();
    //     await expect(page.getByText('Card Type')).toBeVisible();
    //     await expect(page.getByText('Card Number')).toBeVisible();
    //     await expect(page.getByText('Card Expiry')).toBeVisible();
    //     await studentsRole.btnClick_UpdateMyCard();
    //     await students_api_page.FillCardNumber();
    //     await students_api_page.FillMMYY();
    //     await students_api_page.FillCVC();
    //     await students_api_page.FillZIP();
    //     await studentsRole.btnClick_Update();

    //     await studentsRole.textContactUs.isVisible();
    //     await studentsRole.btnContactUs.isVisible();

    //     await allure.step("Step_004_Verify Payment History page", async () => {
    //     });

    //     await studentsRole.btnClick_PaymentHistory();
    //     await expect(page.getByText('Payment History')).toBeVisible();
    //     await expect(page.getByText('Amount')).toBeVisible();
    //     await expect(page.getByText('Next Payment Date:')).toBeVisible();
    // });
});   