import { test, expect } from '@playwright/test'
import FontSizePage from '../../pages/left-panel/font_size_page';
import { allure } from "allure-playwright"

test.describe('LeftPanel', () => {

    let font_size_page: FontSizePage;

    test.beforeEach(async ({ page }) => {
    font_size_page = new FontSizePage(page);
        await font_size_page.navigate();

    });

    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_Default fontsize should be 12px", async () => {
        });      
        await expect(page.getByText('Font Size')).toBeVisible();
        await expect(font_size_page.fontSize).toBeVisible();
        //await font_size_page.fontSize_Click();
          
        await allure.step("Step_002_Verify when dropdown value is selected , fontsize is getting changed", async () => {
        });
       
        await(font_size_page.fontSize.click())
        await font_size_page.fontsize_Selected(font_size_page.fontSize,"15px")
        await expect(font_size_page.ideScreen).toHaveCSS('font-size','15px')
        

    });
});