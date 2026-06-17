import { test, expect } from '@playwright/test';
import orders from './test-data/orders.json';

test('Debug Add products to cart', async ({ page }) => {

  for (const product of orders.products) {

    console.log(`Processing Product: ${product.name}`);

    await page.goto(`https://demowebshop.tricentis.com/${product.category}`);

    const productCard = page.locator('.product-item').filter({
      hasText: product.name
    });

    await expect(productCard).toBeVisible();

    await productCard
      .getByRole('button', { name: /Add to cart/i })
      .click();

    console.log(`Added Product: ${product.name}`);

    await page.waitForTimeout(2000);
  }

  await page.locator('.cart-label').first().click();

  console.log('Cart Opened');

  // Pause execution and open Playwright Inspector
  await page.pause();

});