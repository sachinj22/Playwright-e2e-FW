import { expect } from '@playwright/test';
export class aems_login_page{


    /**
     * @param {import('@playwright/test').Page} page
     */
    
    constructor(page)
    {
        this.page =page;
        this.username =  page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.cookies_accept = page.locator('[data-test="coi-allow-all-button"]');
        this.submit_button = page.getByRole('button', { name: 'Log in' });
    }

   

    async enterUsername(username)
    {
        await this.username.fill(username, {timeout: 5000});
    }

    async enterPassword(password)
    {
        await this.password.fill(password, {timeout: 5000});
    }

    async clickLoginButton()
    {
        await this.submit_button.click({timeout: 5000});
    }

    async acceptCookies()
    {
        await this.cookies_accept.click({timeout: 5000});
    }

    async perform_login(username, password)
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.acceptCookies();
        await this.clickLoginButton();
    }

    
}


