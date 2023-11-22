import { test, expect } from '@playwright/test'
import FullScreenPage from '../../pages/left-panel/fullscreen_page';
import { allure } from "allure-playwright"

test.describe('LeftPanel', () => {

    let fullscreen_page: FullScreenPage;

    test.beforeEach(async ({ page }) => {
        fullscreen_page = new FullScreenPage(page);
        await fullscreen_page.navigate();

    });
    test('Testcase_001_verifyFullScreenButton_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_Verify Fullscreen icon clicked 1st time- screen got opened by covering entire screen.on 2nd click it minimize the screen", async () => {
        });      
        await (fullscreen_page.fullScreenButton_click)
       // await fullscreen_page.fullScreenButton_click(fullscreen_page.fullScreen,'32H320z')
       // await expect(fullscreen_page.fullScreen).toContainText('32H320z')
       await expect (fullscreen_page.advancedJavaIde).toBeHidden();
      await (fullscreen_page.fullScreenButton_click)
      await expect (fullscreen_page.advancedJavaIde).toBeVisible();
      //await fullscreen_page.advancedJavaIde.isVisible();
       
    });    

});