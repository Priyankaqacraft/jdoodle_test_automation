import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'

class AdminRole {

    page: Page;
    btnDashboard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnDashboard = page.locator("//span[text()='Dashboard']")
        page.setViewportSize({ width: 1920, height: 1080 })
    }

}
export default AdminRole;    