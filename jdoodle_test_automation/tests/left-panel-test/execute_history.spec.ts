import { test, expect } from '@playwright/test'
import ExecuteHistoryPage from '../../pages/left-panel/execute_history_page';
import { allure } from "allure-playwright"

test.describe('LeftPanel', () => {

    let executeHistoryPage: ExecuteHistoryPage;

    test.beforeEach(async ({ page }) => {
        executeHistoryPage = new ExecuteHistoryPage(page);
        await executeHistoryPage.navigate();
    });


    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_Verify text color of Execute History on mouse hover", async () => {
        });
        await executeHistoryPage.menuClick_OpenClose();
        await executeHistoryPage.mouseHoverOn_ExecuteHistory();
        await expect(executeHistoryPage.menuExecuteHistory).toHaveCSS('color', 'rgb(253, 82, 0)');

        await allure.step("Step_002_Verify redirect on Recent Java Execution page", async () => {
        });
        await executeHistoryPage.menuClick_ExecuteHistory();
        await expect(page.getByText('Recent Java Executions')).toBeVisible();

        await allure.step("Step_003_Verify Login on Execute History", async () => {
        });
        await expect(page.getByText('Please Login')).toBeHidden();

        await allure.step("Step_004_Verify sub heading No Recent Executions", async () => {
        });
        await expect(page.getByText('No Recent Executions')).toBeVisible();

        await allure.step("Step_005_Verify toggle button enable", async () => {
        });
        await expect(executeHistoryPage.btnToggle).toBeEnabled();

        await allure.step("Step_006_Verify close button visible", async () => {
        });
        await expect(executeHistoryPage.btnClose).toBeVisible();

        await allure.step("Step_007_Verify Recent execution record", async () => {
        });
        await executeHistoryPage.click_closeButton();
        await executeHistoryPage.click_executeButton();
        await executeHistoryPage.menuClick_ExecuteHistory();
        await executeHistoryPage.click_recentExecutionHistory();
        await expect(executeHistoryPage.btnOpen).toBeVisible();

        await allure.step("Step_008_Verify executed program is display", async () => {
        });
        await expect(executeHistoryPage.codeEditor).toBeVisible();


        await allure.step("Step_009_Verify heading for language java", async () => {
        });
        // await executeHistoryPage.pressEscapeKey(page, 'Execute History');
        // await executeHistoryPage.select_option_From_Dropdown(executeHistoryPage.select_box_searchLanguage, "Java");
        // await expect(page.getByText('Online Java Compiler IDE')).toBeVisible();

        await allure.step("Step_010_Verify heading for language C++", async () => {
        });
        // await executeHistoryPage.select_option_From_Dropdown(executeHistoryPage.select_box_searchLanguage, "C++");
        // await expect(page.getByText('Online C++ Compiler IDE')).toBeVisible();

        

    });

});
