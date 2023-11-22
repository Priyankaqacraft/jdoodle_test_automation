import { test, expect } from '@playwright/test'
import Instant_Share from '../../pages/left-panel/instant_share_page';
import { allure } from "allure-playwright"
import SharePage from '../../pages/left-panel/share_page';

test.describe.serial('Instant_share', () => {

    let instant_share_page: Instant_Share;
    let share_page: SharePage;

    test.beforeEach(async ({ page }) => {
        instant_share_page = new Instant_Share(page);
        await instant_share_page.navigate();

        share_page = new SharePage(page)
    });

    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await instant_share_page.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();
      
        await allure.step("Step_002_Verify title of Instant Share Page ", async () => {
        });  
        await instant_share_page.menuClick_InstantShare();
        await instant_share_page.textInstantShare.isVisible();
        await page.waitForTimeout(3000);
        await instant_share_page.menuClick_btnGetShareUrls();
        await page.waitForTimeout(3000);
        await share_page.linkClick_ShareUrl();
        await expect(page.getByText('Copied to clipboard!')).toBeVisible();
        await share_page.textEmbedUrl.isVisible();
        await share_page.openNewTab();
        await share_page.pasteText();
        await share_page.btnClick_CloseShareUrls();
    }); 
});         