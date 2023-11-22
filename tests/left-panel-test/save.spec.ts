import { test, expect } from '@playwright/test'
import Save from '../../pages/left-panel/save_page';
import { allure } from "allure-playwright"
import LoginPage from '../../pages/login';

test.describe.serial('Save', () => {

    let save_page: Save;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        save_page = new Save(page);
        await save_page.navigate();

        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await save_page.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();
        
        await allure.step("Step_002_Verify Save Page", async () => {
        });
        await save_page.menuClick_Save();
        await expect(page.getByText('You must be logged in first.')).toBeVisible();
        await expect(save_page.btnLogin).toBeVisible();
        await expect(save_page.btnClose).toBeVisible();
    });    

    test('Testcase_002_verifyLeftPanel_With_Login.', async ({ page }) => {

        await allure.step("Step_001_Enter Login Details", async () => {
        });
        
        await loginPage.loginWithValidCredentials("admin@abc.com", "Test1234");
        await page.waitForTimeout(10000);
        await allure.step("Step_002_Save your Project ", async () => {
        });
        await save_page.menuClick_OpenClose();
        await save_page.menuClick_Save();
        await expect(page.getByText('Save your Project')).toBeVisible();
        await save_page.input_ProjectName('ABC')
        await save_page.btnClick_Save();
        await expect(page.getByText('New Project Saved Successfully')).toBeVisible();
        await expect (save_page.btnToggle).toBeVisible();
        await save_page.btnClick_SaveAgain();
        await expect(page.getByText('Project Updated and Saved Successfully')).toBeVisible();
        await save_page.input_ProjectName('ABC23')
        await save_page.btnClick_SaveAs();
        await save_page.btnClick_CloseSavePage();
        await expect(page.getByText('Online Java Compiler IDE')).toBeVisible();

    });
});    
