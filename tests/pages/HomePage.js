import { expect } from '@playwright/test';
import { time } from 'console';

export class HomePage{


    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;
        this.profile_picture = page.getByAltText('profile picture');

        this.logout = page.getByText('Logout');
        this.about = page.getByText('About');
        this.Myinfo = page.getByText('My Info');
        this.recruitment = page.getByText('Recruitment');
    

    }

    async check_if_about_visible()
    {
        return await this.about.isVisible({timeout: 5000});
    }

    async check_home_page_loaded()
    {
        await expect(this.page).toHaveURL(/dashboard/);
    }

    async click_profile_picture()
    {
        await this.profile_picture.first().click({timeout: 5000});
    }
    async click_logout()
    {
        await this.logout.click({timeout: 5000});
    }

    async click_myinfo()
    {
        await this.Myinfo.click({timeout: 5000});
    }

    async perform_logout()
    {
        await this.click_profile_picture();
        const about = await this.check_if_about_visible();
        expect(about).toBe(true);
        await this.click_logout();
    }

    
}


