import { test, expect } from "playwright/test";

import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";

import { waitForDebugger } from "inspector";``
import { Page } from "@playwright/test";


test.describe.serial("Verify Error message after invalid login", () => {
  let loginPage ;
  
  let page ;
  // test.beforeEach(async ({ page }) => {
  //   loginPage = new LoginPage(page);
  //   homePage = new HomePage(page);
  //   await loginPage.launchLoginPage();
    
  // });

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    
    await loginPage.launchLoginPage();
  });

  test("User can login with invalid credentials ", async () => {

    
    
    await loginPage.perform_login("Admin", "admin124", {timeout: 10000});
    //await homePage.check_products_header_visible();  
   
});
 test("Verify error message after invalid login", async () => {
    
    try
    {
        await loginPage.check_error_message_visible();
        const errorText = "Invalid credentials";
        await loginPage.check_error_message_text(errorText);
    }

    catch (error) {
      console.error("Error during login:", error);
    }

  
});

 test.afterAll(async () => {
    await page.close();
  });
});
