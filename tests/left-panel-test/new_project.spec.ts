import { test, expect } from '@playwright/test'
import NewProjectPage from '../../pages/left-panel/new_project_page';
import LeftPanelPage from '../../pages/left-panel/left_panel_page';
import { allure } from "allure-playwright"

test.describe('NewProject', () => {

    let newProjectPage: NewProjectPage;
    let leftpanelPage: LeftPanelPage;

    test.beforeEach(async ({ page }) => {
        newProjectPage = new NewProjectPage(page);
        leftpanelPage = new LeftPanelPage(page);
        await newProjectPage.navigate();
    });


    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await newProjectPage.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();

        await allure.step("Step_002_Verify text color of New Project on mouse hover", async () => {
        });
        await newProjectPage.mouseHoverOn_NewProject();
        await expect(newProjectPage.menuNewProject).toHaveCSS('color', 'rgb(253, 82, 0)');

        await allure.step("Step_003_Verify login for New Project", async () => {
        });
        await newProjectPage.menuClick_NewProject();
        await expect(page.getByText('Please Login')).toBeHidden();
        // await newProjectPage.pressEscapeKey(page, 'New Project');

        await allure.step("Step_004_Verify redirect on new project page", async () => {
        });
        await expect(newProjectPage.labelNewProject).toBeVisible();

        await allure.step("Step_005_Verify No button on new project page", async () => {
        });
        await newProjectPage.click_No_Button();
        await expect(newProjectPage.textProgram).toContainText("public class MyClass {");

        await allure.step("Step_006_Verify Yes button on new project page", async () => {
        });
        await newProjectPage.menuClick_NewProject();
        await newProjectPage.click_Yes_Button();
        // await expect(newProjectPage.textAreaProgram).toContainText('');
        //expect textcontent to be empty
        await expect(newProjectPage.textProgram).toBeEmpty();
        
        await allure.step("Step_007_Verify popup after change the program", async () => {
        });
        await newProjectPage.update_project_content();
        await leftpanelPage.select_option_From_Dropdown(leftpanelPage.select_box_searchLanguage, "C++");
        await expect(newProjectPage.confiramtionPopup).toBeVisible();

    });

});
