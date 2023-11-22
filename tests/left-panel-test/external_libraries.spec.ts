import { test, expect } from '@playwright/test'
import ExternalLibraryPage from '../../pages/left-panel/external_libraries_page';
import LeftPanelPage from '../../pages/left-panel/left_panel_page';
import { allure } from "allure-playwright"

test.describe('LeftPanel', () => {

    let externalLibraryPage: ExternalLibraryPage;
    let leftPanelPage: LeftPanelPage;

    test.beforeEach(async ({ page }) => {
        externalLibraryPage = new ExternalLibraryPage(page);
        leftPanelPage = new LeftPanelPage(page);
        await externalLibraryPage.navigate();
    });


    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_Verify text color of External Libarary on mouse hover", async () => {
        });
        await externalLibraryPage.menuClick_OpenClose();
        await externalLibraryPage.mouseHoverOn_ExternalLibraries();
        await expect(externalLibraryPage.menuExternalLibrary).toHaveCSS('color', 'rgb(253, 82, 0)');

        await allure.step("Step_002_Verify redirect on External Libraries page", async () => {
        });
        await externalLibraryPage.menuClick_ExternalLibrary();
        await expect(externalLibraryPage.textExternalLibraries).toBeVisible();

        await allure.step("Step_003_Verify Login on External Library", async () => {
        });
        await expect(page.getByText('Please Login')).toBeHidden();
        // await leftPanelPage.pressEscapeKey(page, 'External Libraries');

        await allure.step("Step_004_Verify first instruction", async () => {
        });
        await expect(externalLibraryPage.infoText1).toBeVisible();

        await allure.step("Step_005_Verify second instruction", async () => {
        });
        await expect(externalLibraryPage.infoText2).toBeVisible();

        await allure.step("Step_006_Verify third instruction", async () => {
        });
        await expect(externalLibraryPage.infoText3).toBeVisible();

        await allure.step("Step_007_Verify search maven url", async () => {
        });
        await expect(externalLibraryPage.urlSearchMaven).toHaveAttribute('target', '_blank');

        await allure.step("Step_008_Verify maven repo url", async () => {
        });
        await expect(externalLibraryPage.urlMavenRepo).toHaveAttribute('target', '_blank');

        await allure.step("Step_009_Verify close button visible", async () => {
        });
        await expect(externalLibraryPage.btnClose).toBeVisible();

        await allure.step("Step_010_Verify close button is close external libraries window", async () => {
        });
        await externalLibraryPage.click_closeButton();
        await expect(page.getByText('Menu')).toBeVisible();

        await allure.step("Step_011_Verify Add Library ", async () => {
        }); 
        await externalLibraryPage.menuClick_ExternalLibrary();
        await externalLibraryPage.addLibrary();
        await expect(externalLibraryPage.btnDelete).toBeVisible();

        await allure.step("Step_012_Verify Delete Library ", async () => {
        });
        await externalLibraryPage.deleteLibrary();
        await expect(externalLibraryPage.btnDelete).toBeHidden();        

    });

});