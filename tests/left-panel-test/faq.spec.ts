import { test, expect } from '@playwright/test'
import FaqPage from '../../pages/left-panel/faq_page';
import { allure } from "allure-playwright"
import exp from 'constants';

test.describe('Faq', () => {

    let faqPage: FaqPage;

    test.beforeEach(async ({ page }) => {
        faqPage = new FaqPage(page);
        await faqPage.navigate();
    });


    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await faqPage.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();
        

        await allure.step("Step_002_Verify title of Faq Page ", async () => {
        });
        await faqPage.menuClick_HowFaq();
        await faqPage.newTab();
        //await expect(page.getByText('Introduction - Documentation')).toBeVisible();

    });
    

});