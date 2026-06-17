import { test, expect } from '@playwright/test';

test('Open Practice Test Automation website', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');
await expect(
  page.locator('#username')
).toBeVisible();
await expect(
page.locator('#password')
).toBeVisible();
await page.fill('#username', 'student');
await page.fill('#password','Password123');
await page.click('#submit');
await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
await expect(
  page.locator('.post-title')
).toHaveText('Logged In Successfully');
await expect(
  page.getByRole('link', { name: 'Log out' })
).toBeVisible();
await page.getByRole('link', { name: 'Log out' }).click();
});