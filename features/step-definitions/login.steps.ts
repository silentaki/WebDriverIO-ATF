import { Then, Before } from '@wdio/cucumber-framework';
import { loginPage } from '../pageobjects/login.page.js';
import { dashboardPage } from '../pageobjects/dashboard.page.js';

Before(async () => {
    await loginPage.gotoUrl()
  });

Then('I should verify the {string}', async (message:string) => {
    await dashboardPage.waitForElementToHaveText(await dashboardPage.welcomeText,message);
});




