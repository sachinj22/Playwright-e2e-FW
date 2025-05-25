export class LoginPage{


    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;
        this.usernameinput = page.locator("#user-name");
        this.passwordinput = page.locator("//input[@id='password']");
        this.loginbutton = page.locator("//input[@id='login-button']");

    }

    async launchLoginPage()
    {
        await this.page.goto("/");

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
        await this.loginbutton.click();
    }

    async perform_login(username, password)
    {
        await this.launchLoginPage();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    
}


