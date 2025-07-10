import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  //await page.getByText('Aristotle').click();
  //await page.getByRole('link', { name: 'Resources' }).click();
  //await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('text=Aristotle').click();
  await page.locator('a.nav-link:has-text("Resources")').click();
  await page.locator('a.nav-link:has-text("Home")').click();
  await page.locator('a', {hasText: 'Dynamic Table'}).click();
});