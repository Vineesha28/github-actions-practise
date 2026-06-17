import { test, expect } from '@playwright/test';

test('home page loads successfully', async ({ page }) => {
  await page.goto('https://testingautonomy.com/');

  await expect(
    page.getByRole('heading', { name: /testing autonomy/i })
  ).toBeVisible();
});