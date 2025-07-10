import {test, expect} from '@playwright/test';

test('Automatio exercise', async ({page}) => {
    await page.goto('https://automationexercise.com/');
    await page.locator("(//a[contains(@href, '/product_details/1')])[1]").click();
    await page.locator("#quantity").fill('3');
    await page.locator("//button[contains(@class,'btn btn-default cart')]").click();
    await expect(page.locator('h4',{hasText: 'Added!'})).toContainText('Added!'); 
    await page.locator('button', {hasText:'Continue Shopping'}).click()
    await expect(page.locator("//div[contains(@class,'modal-dialog modal-confirm')]")).toBeHidden();

});