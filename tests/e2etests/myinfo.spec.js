import { test, expect } from "playwright/test";

import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { MyinfoPage } from "../pages/MyinfoPage.js";
import { waitForDebugger } from "inspector";``
import { Page } from "@playwright/test";


test.describe.serial.only("Verify My info tab", () => {
  let loginPage ;
  let homePage ;
  let page ;
  let mip;
  // test.beforeEach(async ({ page }) => {
  //   loginPage = new LoginPage(page);
  //   homePage = new HomePage(page);
  //   await loginPage.launchLoginPage();
    
  // });

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    mip = new MyinfoPage(page);
    await loginPage.launchLoginPage();
  });

  test("User can login with valid credentials ", async () => {

    
    
    await loginPage.perform_login("Admin", "admin123", {timeout: 10000});
    //await homePage.check_products_header_visible();

  
    await homePage.check_home_page_loaded();
   
});

  test("User can navigate to Myinfo tab and view all details", async () => {
    
    await homePage.click_myinfo();
    console.log("Navigated to Myinfo tab");
    await mip.click_personal_details();
    console.log("Clicked on Personal Details");
    //expect(await mip.check_if_personal_details_visible()).toBe(true);
    expect(await mip.check_if_contact_details_visible()).toBe(true);
    expect(await mip.check_if_emergency_contacts_visible()).toBe(true);
    expect(await mip.check_if_dependents_visible()).toBe(true);
  });

  test.afterAll(async () => {
    await page.close();
  });
});
