import { test, expect } from "playwright/test";

import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { CartPage } from "../pages/CartPage.js";
import { waitForDebugger } from "inspector";


test.describe("Verify if the User can login to product cart and search for products", () => {
  let loginPage ;
  let homePage ;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    await loginPage.launchLoginPage();
  });

  test("User can login with valid credentials", async () => {
    await loginPage.perform_login("standard_user", "secret_sauce", {timeout: 10000});
    //await homePage.check_products_header_visible();
    
  
    
    
    await homePage.add_backpack_to_cart();
    await homePage.click_cart();
    //await cartPage.check_ifcontinue_shopping_visible();
    await cartPage.click_checkout();
  });

});
