import { Locator, Page, expect } from '@playwright/test'
import * as metamask from '@synthetixio/synpress';

export class BasePage {
  readonly page: Page
  element: Locator

  constructor(page: Page) {
    this.page = page
  }

  async click(elem){
    await this.page.click(elem);
  }

  async wait(time) {
    await this.page.waitForTimeout(time)
  }

  async gotoDiscover(){
    await this.page.goto('https://defi-dev.krystal.team/market');
  }

}
