import { test, expect } from '@playwright/test';

test('Open OWASP Juice Shop search page', async ({ page }) => {
  await page.goto('https://preview.owasp-juice.shop/#/search');

  await expect(page).toHaveURL( 'https://preview.owasp-juice.shop/#/search');
  await page.locator('#searchQuery input').click();
  await page.locator('#searchQuery input').fill('Apple juice');
 
  await page.getByRole('button', { name : ' Add to Basket'}).click();
  
  const addButtons=page.getByRole('button', {name : /add To Basket/i});
  await addButtons.nth(0).click();
  await addButtons.nth(1).click();
  await addButtons.nth(2).click();
  await addButtons.nth(3).click();
  await expect(
    page.locator('.mat-badge-content')
  ).toHaveText('3');
  
});