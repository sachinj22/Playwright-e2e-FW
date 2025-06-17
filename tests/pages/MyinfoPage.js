import { expect } from '@playwright/test';
export class MyinfoPage{


    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page)
    {
        this.page = page;
        this.personal_details = page.locator("//a[contains(text(),'Personal Details')]");
        this.contact_details = page.waitForSelector("//a[contains(text(),'Contact Details')]",{state: 'visible'});
        this.emergency_contacts = page.waitForSelector("//a[contains(text(),'Emergency Contacts')]",{state: 'visible'});
        this.dependent = page.waitForSelector("//a[contains(text(),'Dependents')]",{state: 'visible'});

    }

    async click_personal_details()
    {
        await this.personal_details.click({timeout: 5000});
    }

    async check_if_personal_details_visible()
    {
        return await this.personal_details.isVisible({timeout: 5000});
    }

    async check_if_contact_details_visible()
    {
        const cds = await this.contact_details;
        return await cds.isVisible({timeout: 5000});
    }

    async check_if_emergency_contacts_visible()
    {
        const eds= await this.emergency_contacts;
        return await eds.isVisible({timeout: 5000});
    }

    async check_if_dependents_visible()
    {
        return await this.dependent.isVisible({timeout: 5000});
    }

}


