import { test, expect } from '@playwright/test'
import Save from '../../pages/left-panel/pretty_print_page';
import { allure } from "allure-playwright"
import Pretty from '../../pages/left-panel/pretty_print_page';

test.describe.serial('Pretty', () => {

    let pretty_print_page: Pretty;

    test.beforeEach(async ({ page }) => {
        pretty_print_page = new Pretty(page);
        await pretty_print_page.navigate();
    });

    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await pretty_print_page.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();
        
        await allure.step("Step_002_Verify Pretty Print Page", async () => {
        });
        await pretty_print_page.menuClick_PrettyPrint();
        await pretty_print_page.printContainer.isVisible();
    });   
});    