import {test,expect} from '@playwright/test'
import LoginPage from '../pages/login'
import {allure} from "allure-playwright"

test.describe.serial('Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Testcase_001_Login with valid credentials.', async ({ page }) => {
        await allure.step("Step_001_Enter Login Details", async () => {
            
        });
        await loginPage.loginWithValidCredentials("gaurang@qacraft.com", "Rain999@");
        await allure.step("Step_002_Verify Login Sucessful", async () => {
            
        });
        await loginPage.btnDashboard.isVisible();
    });

});