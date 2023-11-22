import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright"
import AdminRole from '../../pages/user-role-permissions/admin_role_page';
import LoginPage from '../../pages/login';
import StudentsRole from '../../pages/user-role-permissions/students_role_page';
import TeacherPage from '../../pages/user-role-permissions/Teacher_page';
import save_page from '../../pages/left-panel/save_page';
import SavePage from '../../pages/left-panel/save_page';


test.describe.serial('AdminRole', () => {

    let loginPage: LoginPage;
    let studentsRole: StudentsRole;
    let admin_role_page: AdminRole;
    let teacher_page: TeacherPage;
    let save_page: SavePage;


    test.beforeEach(async ({ page }) => {
        studentsRole = new StudentsRole(page);
        await studentsRole.navigate();

        loginPage = new LoginPage(page);

        admin_role_page = new AdminRole(page);

        teacher_page = new TeacherPage(page);

        save_page = new SavePage(page);
        
    });
    test('Testcase_001_VearifyLeftPanel_With_Login.', async ({ page }) => {

        await allure.step("Step_001_Enter Login Details", async () => {
        });
        await loginPage.loginWithValidCredentials("ia@test.co", "Test123")
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
});    