import { test, expect } from '@playwright/test'
import SharePage from '../../pages/left-panel/share_page';
import { allure } from "allure-playwright"
import exp from 'constants';
import LoginPage from '../../pages/login';
import ExecuteHistoryPage from '../../pages/left-panel/execute_history_page';
import { arch } from 'os';

test.describe.serial('SharePage', () => {

    let share_page: SharePage;
    let loginPage: LoginPage;
    let executehistrypage: ExecuteHistoryPage;

    test.beforeEach(async ({ page }) => {
        share_page = new SharePage(page);
        await share_page.navigate();

        loginPage = new LoginPage(page);
        await loginPage.navigate();

        executehistrypage = new ExecuteHistoryPage(page);
    });

            // DONE
    // test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {

    //     await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
    //     });
    //     await share_page.menuClick_OpenClose();
    //     await expect(page.getByText('Menu')).toBeVisible();

    //     await allure.step("Step_002_Verify title of Editable Share Page ", async () => {
    //     });
    //     await share_page.menuClick_EditableShare();
    //     await expect(page.getByText('You must be logged in first.')).toBeVisible();
    //     await allure.step("Step_003_Verify Save and Close Button is Display ", async () => {
    //     });
    //     await expect(share_page.btnLogin).toBeVisible();
    //     await share_page.btnClick_CloseLogin();   
    // });    
    
        // VerifyLeftPanel_with_Login 

     test('Testcase_002_VerifyLeftPanel_With_Login.', async ({ page }) => {

        await allure.step("Step_001_Enter Login Details", async () => {
        });
        await loginPage.loginWithValidCredentials("admin@abc.com", "Test1234");
        //await share_page.menuClick_StartCoding();
        await allure.step("Step_002_Verify text on Editable Share Page ", async () => {
        });
        await page.waitForTimeout(3000);
        await share_page.menuClick_OpenClose();
        await share_page.menuClick_EditableShare();
        await expect(page.getByText('Editable Share')).toBeVisible();

          //Save Project 

        await allure.step("Step_003_Click on Save and Verify Save Project page title", async () => {
        });
        await share_page.btnClick_Save(); 
        await expect(page.getByText('Save your Project')).toBeVisible();
        await share_page.input_ProjectName('Testing');
        await share_page.btnClick_SaveProject();
                    
        await allure.step("Step_004_Click on SaveAs", async () => {
        });
        await page.waitForTimeout(5000);
        await share_page.input_ProjectName('SaveNew')
        await share_page.btnClick_SaveAs();
        await share_page.btnClick_CloseSaveProject(); 
        await share_page.menuClick_EditableShare();
        await allure.step("Step_008_Click on Get Share Urls", async () => {
        });
        await share_page.btnClick_GetShareUrl();
        await share_page.linkClick_ShareUrl();
        await expect(page.getByText('Copied to clipboard!')).toBeVisible();
        await share_page.textEmbedUrl.isVisible();
        await share_page.openNewTab();
        await share_page.pasteText();
        await share_page.btnClick_UnshareUrl();
        await share_page.btnClick_CloseShareUrls();
        await share_page.clear2Cookies();
        // await share_page.btnClick_Dashboard();
        // await share_page.btnClick_LogOut();
    });
        
        // My Project - DONE

    // test('Testcase_003_VerifyLeftPanel_Editable Share My Project', async ({ page }) => {    

    //     await allure.step("Step_001_Login and open My Project", async () => {
    //     });
    //     //await page.waitForTimeout(20000);
    //     await loginPage.loginWithValidCredentials("admin@abc.com", "Test1234");
    //     await allure.step("Step_002_Click on My Project page and click on Project Name", async () => {
    //     });
    //     await share_page.menuClick_OpenClose();
    //     await share_page.menuClick_EditableShare();
    //     await share_page.btnClick_MyProject(); 
    //     await expect(page.getByText('My Java Projects')).toBeVisible();
    //     await share_page.btnClick_Project();
    //     await share_page.displayCode.isVisible();
    //     await share_page.btnClose_MyProject();
    //     await share_page.clear2Cookies();
    //     // await share_page.btnClick_Dashboard();
    //     // await share_page.btnClick_LogOut();
    // });    
        
    //      //Open My Project - Done

    // test('Testcase_004_VerifyLeftPanel_Editable Share My Project click on Open Project', async ({ page }) => {         
    //     await allure.step("Step_001_Login and open My Project", async () => {
    //     });
    //     //await page.waitForTimeout(20000);
    //     await loginPage.loginWithValidCredentials("admin@abc.com", "Test1234");
    //     await allure.step("Step_002_Open Project", async () => {
    //     });
    //     await share_page.menuClick_OpenClose();
    //     await share_page.menuClick_EditableShare();
    //     await share_page.btnClick_MyProject();
    //     await share_page.btnClick_Project();
    //     await page.waitForTimeout(3000);
    //     await share_page.open_Project();
    //     await expect(page.getByText('Online Java Compiler IDE')).toBeVisible();
    //     await share_page.clear2Cookies();
        // await share_page.btnClick_Dashboard();
        // await share_page.btnClick_LogOut();
    //});    

        //Remove My Project

    // test('Testcase_005_VerifyLeftPanel_Editable Share My Project click on Remove Project', async ({ page }) => { 
    //     await allure.step("Step_001_Login and open My Project", async () => {
    //     });
    //     await loginPage.loginWithValidCredentials("admin@abc.com", "Test1234");

    //     await allure.step("Step_002_Remove Project", async () => {
    //     });
    //     await share_page.menuClick_OpenClose();
    //     await share_page.menuClick_EditableShare();
    //     await share_page.btnClick_MyProject();
    //     await share_page.btnClick_Project();
    //     await share_page.btnClick_Remove(); 
    //     await expect(page.getByText('Are you sure, do you want to delete this project?')).toBeVisible();
    //     await share_page.btnNo.isVisible();
    //     await share_page.btnClick_Yes();
    // });
});