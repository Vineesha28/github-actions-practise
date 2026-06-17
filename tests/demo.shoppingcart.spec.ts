import { test, expect } from '@playwright/test';

test('Add single product to cart using image alt', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/blue-jeans');

  await expect(
    page.getByAltText('Picture of Blue Jeans')
  ).toBeVisible();

  await page.locator('#add-to-cart-button-36').click();

  await page.waitForTimeout(1000);

  await page.locator('.cart-label').first().click();

  await expect(
    page.locator('.cart').getByText('Blue Jeans')
  ).toBeVisible();
});