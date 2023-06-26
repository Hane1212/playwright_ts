import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page'

test.describe('Connect wallet', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
  })
    test('Connect to metaWallet', async ({ page }) => {
      await homePage.gotoKrystal();
      await homePage.connectMetamaskWallet();

    })
  })