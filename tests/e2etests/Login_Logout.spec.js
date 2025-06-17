import { test, expect } from "playwright/test";

import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";

import { waitForDebugger } from "inspector";``
import { Page } from "@playwright/test";


test.describe.serial("Verify login and logout", () => {
  let loginPage ;
  let homePage ;
  let page ;
  // test.beforeEach(async ({ page }) => {
  //   loginPage = new LoginPage(page);
  //   homePage = new HomePage(page);
  //   await loginPage.launchLoginPage();
    
  // });

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.launchLoginPage();
  });

  test("User can login with valid credentials ", async () => {

    
    
    await loginPage.perform_login("Admin", "admin123", {timeout: 10000});
    //await homePage.check_products_header_visible();

  
    await homePage.check_home_page_loaded();
   
});

  test("User can logout successfully", async () => {
    await homePage.perform_logout();
    await loginPage.check_if_logout_successful();
  });

  test.afterAll(async () => {
    await page.close();
  });
});
