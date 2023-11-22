import { test, expect } from '@playwright/test'
import LeftPanelPage from '../../pages/left-panel/left_panel_page';
import { allure } from "allure-playwright"

test.describe('LeftPanel', () => {

    let leftpanelPage: LeftPanelPage;

    test.beforeEach(async ({ page }) => {
        leftpanelPage = new LeftPanelPage(page);
        await leftpanelPage.navigate();
    });


    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await leftpanelPage.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();

        await allure.step("Step_002_Verify text color of Execute History on mouse hover", async () => {
        });
        await leftpanelPage.mouseHoverOn_ExecuteHistory();
        await expect(leftpanelPage.menuExecuteHistory).toHaveCSS('color', 'rgb(253, 82, 0)');

        await allure.step("Step_003_Verify redirect on Recent Java Execution page", async () => {
        });
        await leftpanelPage.menuClick_ExecuteHistory();
        await expect(page.getByText('Recent Java Executions')).toBeVisible();

        await allure.step("Step_004_Verify Login on Execute History", async () => {
        });
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Execute History');

        await allure.step("Step_005_Verify heading for language java", async () => {
        });
        // await leftpanelPage.select_option_From_Dropdown(leftpanelPage.select_box_searchLanguage, "Java");
        // await expect(page.getByText('Online Java Compiler IDE')).toBeVisible();

        await allure.step("Step_006_Verify heading for language C++", async () => {
        });
        // await leftpanelPage.select_option_From_Dropdown(leftpanelPage.select_box_searchLanguage, "C++");
        // await expect(page.getByText('Online C++ Compiler IDE')).toBeVisible();

        await allure.step("Step_007_Verify text color of External Library on mouse hover", async () => {
        });
        await leftpanelPage.mouseHoverOn_ExecuteHistory();
        await expect(leftpanelPage.menuExternalLibrary).toHaveCSS('color', 'rgb(253, 82, 0)');

        await allure.step("Step_008_Verify redirect on External Libraries page", async () => {
        });
        await leftpanelPage.menuClick_ExternalLibrary();
        await expect(page.getByText('External Libraries')).toBeVisible();

        await allure.step("Step_009_Verify Login on External Library", async () => {
        });
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'External Libraries');

        await allure.step("Step_004_Verify New Project", async () => {
        });
        await leftpanelPage.menuClick_NewProject();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'New Project');

        await allure.step("Step_005_Verify My Project", async () => {
        });
        await leftpanelPage.menuClick_MyProject();
        await expect(page.getByText('Please Login')).toBeVisible();
        await leftpanelPage.pressEscapeKey(page, 'My Projects');

        await allure.step("Step_006_Verify Collaborate", async () => {
        });
        await leftpanelPage.menuClick_Collaborate();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Collaborate');

        await allure.step("Step_008_Verify Save", async () => {
        });
        await leftpanelPage.menuClick_Save();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Save');

        await allure.step("Step_009_Verify Open from local file", async () => {
        });
        await leftpanelPage.menuClick_OpenFromLocal();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Open (from local file)');

        await allure.step("Step_010_Verify Save to local file", async () => {
        });
        await leftpanelPage.menuClick_SaveToLocal();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Save (to local file)');

        await allure.step("Step_011_Verify Editable Share", async () => {
        });
        await leftpanelPage.menuClick_EditableShare();
        await expect(page.getByText('Please Login')).toBeVisible();
        await leftpanelPage.pressEscapeKey(page, 'Editable Share');

        await allure.step("Step_012_Verify Instant Share", async () => {
        });
        await leftpanelPage.menuClick_InstantShare();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Instant Share');

        await allure.step("Step_013_Verify Pretty Print", async () => {
        });
        await leftpanelPage.menuClick_PreetyPrint();
        await expect(page.getByText('Please Login')).toBeHidden();
        await leftpanelPage.pressEscapeKey(page, 'Pretty Print');

    });

});