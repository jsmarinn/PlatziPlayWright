import { test, expect } from '@playwright/test';

test('assert', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
    await expect(page.locator('#newButtonName')).toBeVisible();
    await page.locator('#newButtonName').fill('Prueba assert');
    await page.locator('#updatingButton').click()
    await expect(page.locator('#updatingButton')).toContainText('Prueba assert');

});