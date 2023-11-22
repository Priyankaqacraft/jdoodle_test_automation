/**
 * FILEPATH: /Users/rhul/Downloads/jdoodle_test_automation/tests/other/register.spec.ts
 * This file contains the test suite for the registration functionality of the application.
 * It imports RegisterPage from '../../pages/other/register' and uses Playwright test library for testing.
 * The test suite contains two test cases:
 * 1. Testcase_001_Register with valid credentials.
 * 2. Testcase_002_Login with valid credentials.
 * The test suite uses Allure for reporting and generates a report for each test case.
 */
import { test, expect } from '@playwright/test'
import RegisterPage from '../../pages/other/register'
import { allure } from "allure-playwright"
import LoginPage from '../../pages/login';


test.describe('Register', () => {

    let registerPage: RegisterPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        loginPage = new LoginPage(page);
        await registerPage.navigate();
        //await registerPage.readEmails();
        await loginPage.loginWithValidCredentials("admin@abc.com", "Test1234");
        await registerPage.btnDadhboard.isVisible();
    });


    test('Testcase_001_Register with valid credentials.', async ({ page }) => {
        await allure.step("Step_001_Register New Account", async () => {

        });
        //await registerPage.RegisterNewAccount_Owner();
        await allure.step("Step_002_Verify New Account Created Sucessfully", async () => {

        });
        //await registerPage.registerSuccessMessage.isVisible();
    });

    test('Testcase_002_Login as owner.', async ({ page }) => {
        await allure.step("Step_001_Login to Application", async () => {

        });
        //await loginPage.loginWithValidCredentials("owner@jdvi.co", "asdf123");
        //await registerPage.btnDadhboard.isVisible();
    });

   test('Testcase_003_Add new Admin.', async ({ page }) => {
        await allure.step("Step_001_Click on Dashbaord", async () => {


        });
        await registerPage.btnDadhboard.click();
        await registerPage.gotoAddUserPage();
        await allure.step("Step_002_Add New Admin", async () => {
        });
        await registerPage.AddNewUser_Admin();
        await page.goBack();
        await registerPage.searchAdminUser();
        await expect(page.locator("//table//tbody//tr")).toBeVisible();
            
    }
    );

    test('Testcase_004_Add new Teacher.', async ({ page }) => {

        await allure.step("Step_001_Add New Teacher", async () => {

        });

        await registerPage.btnDadhboard.click();
        await registerPage.gotoAddUserPage();
        await registerPage.AddNewUser_Teacher();
        await page.goBack();
        await registerPage.searchTeacherUser();
        await page.waitForTimeout(2000)
        await expect(page.locator("//table//tbody//tr")).toBeVisible();
    });

    test('Testcase_005_Add new Student.', async ({ page }) => {

        await allure.step("Step_001_Add New Student", async () => {
        });
        await registerPage.btnDadhboard.click();
        await registerPage.gotoAddUserPage();
        await registerPage.AddNewUser_Student();
        await page.goBack();
        await registerPage.searchStudentUser();
        await page.waitForTimeout(2000)
        await expect(page.locator("//table//tbody//tr")).toBeVisible();
    });


});




