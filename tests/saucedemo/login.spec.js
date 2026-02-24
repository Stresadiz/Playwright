import { test, expect } from "@playwright/test";

const pageUrl = 'https://www.saucedemo.com/'

test('Loguearse con credenciales invalidas', async ({ page }) => {
    await page.goto(pageUrl);

    await expect(page).toHaveTitle(/Labs/);
});

test.afterAll(async () => {
    console.log('Done');
})