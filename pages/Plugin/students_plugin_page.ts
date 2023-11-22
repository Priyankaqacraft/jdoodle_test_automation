import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import { time } from 'console';
import { PageGroupProjectionFromJSON } from 'mailslurp-client';
import { Options } from 'prettier';


class StudentsPlugin {
    page: Page;

    constructor(page: Page) {
        this.page = page;
            
        page.setViewportSize({ width: 1920, height: 1080 })
      }

}
export default StudentsPlugin;