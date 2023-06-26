import { Locator, Page, expect } from '@playwright/test'

export class DiscoverPage {
  readonly page: Page
  readonly usd_currency: Locator
  readonly btc_currency: Locator
  readonly top_gainers: Locator
  readonly top_losers: Locator
  readonly trending: Locator
  element: Locator
  

  constructor(page: Page) {
    this.page = page;
    // this.usd_currency = page.locator("[id= 'tabs-1318--tab-0']");
    this.usd_currency = page.getByText("usd");
    this.btc_currency = page.locator("[id= 'tabs-2735--tab-1']");
    this.top_gainers = page.getByText("Top Gainers");
    this.top_losers =  page.getByText("Top Losers");
  }
  async gotoDiscover(){
    await this.page.goto('https://defi-dev.krystal.team/market');
  }

  async getListToken(){
    await this.page.locator("[class= 'css-1qb7a65']").last().waitFor();

    const row = this.page.locator("[class= 'css-1105ycp']");
    const rowTexts = await row.locator(':scope').allInnerTexts()
    await rowTexts.forEach((text) => {
        console.log(text)
        })
    console.log("Number of token: ")
    console.log(rowTexts.length)
  }

  
}
