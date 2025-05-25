import { time } from 'console';

export class CartPage{


    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;

        this.checkout = page.getByRole('link', { name: 'Checkout' });
        this.cancel = page.getByRole('link', { name: 'CANCEL' });
        this.continue_shopping = page.locator("//div[@class='cart_footer']/a[1]");


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
         await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.getByRole('link', { name: 'CANCEL' }).click();
    }

    async check_ifcontinue_shopping_visible()
    {
        await this.continue_shopping.waitFor({state: 'visible', timeout: 25000});
        const isVisible = await this.continue_shopping.isVisible();
        if (!isVisible) {
            throw new Error("Continue Shopping button is not visible");
        }
    }

    async click_checkout()
    {   
        try
        {
        await this.checkout.click({timeout: 10000});
        
        }

        catch (error)
        {
            console.error("Error clicking checkout button:", error);
            throw new Error("Checkout button is not clickable or not found");
        }    
    }

    
}


