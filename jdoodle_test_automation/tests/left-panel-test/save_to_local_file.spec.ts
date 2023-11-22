import { test, expect } from '@playwright/test'
import SaveToLocalFile from '../../pages/left-panel/save_to_local_file_page';
import { allure } from "allure-playwright"
import exp from 'constants';

test.describe('SaveToLocal', () => {

    let saveToLoaclFile: SaveToLocalFile;

    test.beforeEach(async ({ page }) => {
        saveToLoaclFile = new SaveToLocalFile(page);
        await saveToLoaclFile.navigate();
    });

    test('Testcase_001_verifyLeftPanel_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_VerifyOpenClose_Menu", async () => {
        });
        await saveToLoaclFile.menuClick_OpenClose();
        await expect(page.getByText('Menu')).toBeVisible();
        

        await allure.step("Step_002_Verify title of Save To Local File Page ", async () => {
        });
        await saveToLoaclFile.menuClick_SaveToLocal();
        await expect(saveToLoaclFile.textSaveToLocalFile).toBeVisible();

        await allure.step("Step_003_Verify Download Button is Display ", async () => {
        });
        await expect(saveToLoaclFile.btnDownload).toBeVisible();
        
        await allure.step("Step_004_Verify Close Button is Display ", async () => {
        });
        await expect(saveToLoaclFile.btnClose).toBeVisible();

        await allure.step("Step_005_Verify Downloade Message is Display ", async () => {
        });   
        await saveToLoaclFile.Click_Download();
        await expect(page.getByText('Downloaded Successfully')).toBeVisible();
        await saveToLoaclFile.Click_Close();
      
    });
});