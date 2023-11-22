import { test, expect } from '@playwright/test'
import SearchLanguagePage from '../../pages/left-panel/search_language_page';
import { allure } from "allure-playwright"
import { ExpiredControllerApi } from 'mailslurp-client';

test.describe('LeftPanel', () => {

    let search_language_page: SearchLanguagePage;

    test.beforeEach(async ({ page }) => {
        search_language_page = new SearchLanguagePage(page);
        await search_language_page.navigate();

    });
    test('Testcase_001_verifySearchLanguage_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_Verify Searchbar is available", async () => {
        });      
        await expect(search_language_page.searchBar).toBeVisible();
        await search_language_page.clickOnSearchbar();
        await expect(search_language_page.topSearch).toBeVisible();
        await (search_language_page.fillInSearchBar())
        await search_language_page.noLanguageFound.isVisible();
    });  
    test('Testcase_002_verifySearchLanguage_Without_Login.', async ({ page }) => {
        await allure.step("Step_002_Verify Searchbar relevant search should display result. with X icon to cancel.", async () => {
         
        await expect(search_language_page.searchBar).toBeVisible();
        await search_language_page.clickOnSearchbar();
        await (search_language_page.fillValidInput())
        await search_language_page.deleteButton.isVisible();
        await search_language_page.searchResult.isVisible();

    });   
});  
   

});