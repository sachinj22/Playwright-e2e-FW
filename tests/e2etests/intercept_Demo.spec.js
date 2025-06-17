import { test,expect } from "@playwright/test";

test.describe("Verify intercept functionality", () => {

    test.only("Intercept and modify response", async ({ page, request }) => {
        // Intercept the request to the fruits endpoint
        await page.route('*/**/api/v1/fruits', async route => {
            // Modify the response to simulate a successful login
            const json = [{ name: 'Strawberry', id: 21 }, { name: 'Blueberry', id: 22 }];

            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(json)
            });
        });

        // Navigate to the login page
        await page.goto('https://demo.playwright.dev/api-mocking/');
        await expect(page.getByText('Strawberry'),{timeout: 10000}).toBeVisible();
        await expect(page.getByText('Blueberry'),{timeout: 10000}).toBeVisible();

    });
});