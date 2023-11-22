import { test, expect } from '@playwright/test'
import StudentsAPI from '../../pages/API/students_api_page';
import { allure } from "allure-playwright"
import exp from 'constants';
import LoginPage from '../../pages/login';

test.describe.serial('StudentsAPI', () => {

    let students_api_page: StudentsAPI;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        students_api_page = new StudentsAPI(page);
        await students_api_page.navigate();

        loginPage = new LoginPage(page);
    });

    // Passed 
    // test('Testcase_001_Verify_API_With_Login.', async ({ page }) => { 
    //     await allure.step("Step_001_Verify_Enter Login Details", async () => {
    //     }); 
    //     await loginPage.loginWithValidCredentials("stu@test.co", "Test123");

    //     await allure.step("Step_002_Verify_Students_DashBoard_API_Section", async () => {
    //     });
    //     await students_api_page.btnClick_Dashboard();
    //     await students_api_page.textAPIPlan.isVisible();
    //     await students_api_page.Click_LinkSeePlan();
    //     await students_api_page.textPlatformPlan.isVisible();

    // });
    test('Testcase_002_Verify_API_LeftPanel.', async ({ page }) => { 
        await allure.step("Step_001_Verify_Enter Login Details", async () => {
        });     
        await loginPage.loginWithValidCredentials("stu@test.co", "Test123");
   
        await allure.step("Step_002_Verify_Account_Details", async () => {
        });
        await students_api_page.btnClick_Dashboard();
        await students_api_page.menuClick_APIs();
        await students_api_page.textAccountDetails.isVisible();
        await students_api_page.textClientId.isVisible();
        await students_api_page.textClientSecret.isVisible();
        await students_api_page.textNotSubscribe.isVisible();
        await students_api_page.btnClick_SubscribeNow();

        await allure.step("Step_003_Subscribe API Plan", async () => {
        });
        await students_api_page.btnPlatform.isVisible();
        await students_api_page.btnClick_API();
        await students_api_page.textPricingPlan.isVisible();
        await students_api_page.textCreaditPerDay.isVisible();
        await expect(page.getByText('/monthly')).toBeVisible();
        await students_api_page.btnClick_GetStarted();
        await expect(page.getByText(' Please Confirm the Plan ')).toBeVisible();
      //await students_api_page.switchToFrameByXpath(students_api_page.frameLocator);
        await page.waitForTimeout(2000);
        await students_api_page.FillCardNumber();
        await students_api_page.FillMMYY();
        await students_api_page.FillCVC();
        await students_api_page.FillZIP();
        await students_api_page.btnClick_Subscribe();

        await allure.step("Step_004_Verify_Payment_History", async () => {
        });
        await students_api_page.btnManagePlan.isVisible();
        await students_api_page.btnClick_PaymentDetails();
        await students_api_page.btnClick_PaymentHistory();
        await expect(page.getByText('Daily Credits Usage')).toBeVisible();
        await students_api_page.btnRefreshCount.isVisible();
        await expect(page.getByText('Monthly Credit Usage')).toBeVisible();
        await students_api_page.btnContactUs.isVisible();

    });    

});