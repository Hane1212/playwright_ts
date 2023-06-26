import { Locator, Page, expect } from '@playwright/test'
import * as metamask from '@synthetixio/synpress';

export class HomePage  {
  readonly page: Page
  readonly connectWallet: Locator
  readonly metaWallet: Locator
  element: Locator

  constructor(page: Page) {
    this.page = page
    // this.connectWallet = page.locator('xpath=//*[contains(@class, "open-connect-modal")]')
    this.connectWallet = page.getByText('Connect Wallet');
    this.metaWallet = page.getByText('MetaMask');
}

async connectMetamaskWallet() {
    await this.connectWallet.first().isEnabled()
    await this.connectWallet.first().click()
    await this.metaWallet.click()
    await this.page.pause();
    await metamask.acceptAccess();

  }

//   async click(elem:Locator){
//     await this.page.click(elem);
//   }
  async gotoKrystal(){
    await this.page.goto('https://defi-dev.krystal.team/');
  }
  async clickConnectWallet() {
    await this.connectWallet.click()
  }

}
