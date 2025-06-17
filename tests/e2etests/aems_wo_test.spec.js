import {test, expect} from '@playwright/test';
import { aems_login_page } from '../pages/aems_login_page';


test.describe.serial("Create new WO in aems", () => {


    test.use({
        extraHTTPHeaders: {
        'X-Requestor': 'xxx'  // Replace 'xxx' with the actual requestor value
        }
    });
    let page;
    let context;
    let loginPage;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext({
            viewport: { width: 1280, height: 720 },
            ignoreHTTPSErrors: true,
            bypassCSP: true
        });
        page = await context.newPage();
        loginPage = new aems_login_page(page);
        await page.goto('https://aems-stage.maersk.com/');
    
    });

    test("Create new WO", async () => {
        // Navigate to the AEMS application
        

        // Click on the 'Create Work Order' button

        await loginPage.perform_login("xxx", "xx");  // Replace with actual username and password
        await page.waitForTimeout(5000); // Wait for the page to load
    });

});
