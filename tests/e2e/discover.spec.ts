import { test, expect } from '@playwright/test';
import { DiscoverPage } from '../../pages/discover.page';
import {CHAINS} from '../../pages/env'

test.describe('Access To Discover page', () => {
    let discoverPage: DiscoverPage;
    let chain: CanvasImageSmoothing;
    CHAINS["bsc"].chainID

    
    test.beforeEach(async ({ page }) => {
      discoverPage = new DiscoverPage(page)
      await discoverPage.gotoDiscover();
    })
    test('Check URL', async ({ page }) => {
        await expect(page).toHaveTitle("Market | Krystal Wallet");
    })

    test('Check currency', async ({ page }) => {
        await expect(discoverPage.usd_currency).toBeVisible;
        await expect(discoverPage.btc_currency).toBeVisible;
    })
    test('Check number of row', async ({ page }) => {
        await discoverPage.getListToken();
    })
    // test('Check price', async ({ page }) => {

    // })

    test('Get Top Gainers token', async ({ page }) => {
        await discoverPage.top_gainers.click();
        await discoverPage.getListToken();
    })
})


test.describe('Top Losers', () => {
    let discoverPage: DiscoverPage;
    test.beforeEach(async ({ page }) => {
      discoverPage = new DiscoverPage(page)
      await discoverPage.gotoDiscover();
    })
    test('Get Top Losers token', async ({ page }) => {
        await discoverPage.top_losers.click();
        await discoverPage.getListToken();
    })
    
})


