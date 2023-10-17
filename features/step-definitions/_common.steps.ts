import { When } from '@wdio/cucumber-framework';
import { loginPage } from '../pageobjects/login.page.ts';

When('I login with {string} and {string}', async (username:string, password:string) => {
    await loginPage.login(username, password)
});