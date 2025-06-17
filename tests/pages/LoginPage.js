import { expect } from '@playwright/test';
export class LoginPage{


    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;
        this.usernameinput = page.locator("//input[@name='username']");
        this.passwordinput = page.locator("//input[@name='password']");
        this.loginbutton = page.locator("//button[@type='submit']");
        this.error_message = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");

    }

    async launchLoginPage()
    {
        await this.page.goto("/");

    }

    async check_if_logout_successful()
    {
        await expect(this.page).toHaveURL(/login/);
    }

    async enterUsername(username)
    {
        await this.usernameinput.fill(username, {timeout: 5000});
    }

    async enterPassword(password)
    {
        await this.passwordinput.fill(password, {timeout: 5000});
    }

    async clickLoginButton()
    {
        await this.loginbutton.click({timeout: 5000});
    }

    async check_error_message_visible()
    {
        const error_check =await this.error_message.isVisible({timeout: 5000});
        return error_check;
    }

    async check_error_message_text(expectedText)
    {
        const errorText = await this.error_message.textContent();
        if (errorText !== expectedText) {
            throw new Error(`Expected error message to be "${expectedText}", but got "${errorText}"`);
        }
    }

    async perform_login(username, password)
    {
        await this.launchLoginPage();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    
}


