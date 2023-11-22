import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';

class ExecuteHistoryPage {
  page: Page;
  btnStartCoding: Locator;
  menuOpenClose: Locator;