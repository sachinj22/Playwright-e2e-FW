import { time } from 'console';

export class HomePage{


    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;
        this.products_header = page.locator("//div[contains(text(),'Products')]");
        this.backpack_addtocart = page.locator("//div[contains(text(),'Sauce Labs Backpack')]//following::button[1]");
        this.cart = page.locator("//div[@id='shopping_cart_container']");



    }

    async check_products_header_visible()
    {
        await this.page.waitForTimeout(30000);
        await this.products_header.waitFor({state: 'visible', timeout: 25000});
        const isVisible = await this.products_header.isVisible();
        if (!isVisible) {
            throw new Error("Products header is not visible");
        }
    }

    async add_backpack_to_cart()
    {
        await this.backpack_addtocart.click({timeout: 10000});
        await this.page.waitForTimeout(5000); // Wait for the cart to update
       
    }
    async click_cart()
    {
        await this.cart.click({timeout: 10000});
        await this.page.waitForTimeout(5000); // Wait for the cart page to load
    }

    
}


