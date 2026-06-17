import { test, expect } from '@playwright/test';
import productsData from './test-data/orders.json';
test('Add products to cart', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: /Apparel & Shoes/i }).first().click();
  await page.getByAltText(
  productsData.products[1].imageAlt).click();
  await page.locator('#add-to-cart-button-36').click();
  await expect(
    page.getByText('The product has been added to your Shopping cart')
  ).toBeVisible();
  await page.goto('https://demowebshop.tricentis.com/blue-and-green-sneaker');

  await expect(
    page.getByRole('heading', { name: /Blue and green Sneaker/i })
  ).toBeVisible();

  await page.selectOption('#product_attribute_28_7_10', { index: 1 });
  await page.locator('#add-to-cart-button-28').click();
await expect(
    page.getByText('The product has been added to your shopping cart')
  ).toBeVisible();

  await page.getByRole('link', { name : /jewelry/i}).first().click();
  await page.getByAltText(
  productsData.products[3].imageAlt).click();
  await page.getByRole('button', { name : /Add to compare List/i}).click();
  await page.waitForTimeout(1000);

  await page.getByRole('link', {name : /jewelry/i}).first().click();
  await page.getByAltText(
  productsData.products[4].imageAlt
).click();
  await page.getByRole('button', { name : /Add to compare List/i}).click();
  await page.waitForTimeout(1000);

  await page.getByRole('link', { name : /books/i }).first().click();
  await page.getByAltText(
  productsData.products[5].imageAlt).click();

  await expect(
     page.getByRole('button', { name : / Email a friend/i }).click()


)
  await page.getByRole('link', { name: 'Shopping cart', exact:true }).click();
  await expect(
    page.locator('.cart').getByText('Blue Jeans')
  ).toBeVisible();
  await expect(
    page.locator('.cart').getByText('Blue and green Sneaker')
  ).toBeVisible();
await page.goto('https://demowebshop.tricentis.com/compareproducts');

await expect(
  page.getByText('Diamond Pave Earrings')
).toBeVisible();

await expect(
  page.getByText('Vintage Style Three Stone Diamond Engagement Ring')
).toBeVisible();
});