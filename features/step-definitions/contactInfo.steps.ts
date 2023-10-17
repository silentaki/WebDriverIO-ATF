import { Then, DataTable, Before } from '@wdio/cucumber-framework';
import { dashboardPage } from '../pageobjects/dashboard.page.js';
import { contactInfo } from '../pageobjects/contact-info.page.js';
import { loginPage } from '../pageobjects/login.page.js';

Before(async () => {
    await loginPage.gotoUrl()
  });

Then('I navigate to candidate home and update the {string}', async (city:string) => {
    await dashboardPage.waitForClickable(await dashboardPage.candidateHome)
    await dashboardPage.candidateHome.click()
    await dashboardPage.waitForClickable(await dashboardPage.updateContactInformation)
    await dashboardPage.updateContactInformation.click()
    await contactInfo.waitForClickable(await contactInfo.city)
    await contactInfo.city.setValue(city)
    await contactInfo.ok.click()
});

Then ('I navigate to user profile page',async () => {
  await dashboardPage.waitForClickable(await dashboardPage.candidateHome)
  await dashboardPage.candidateHome.click()
  await dashboardPage.waitForClickable(await dashboardPage.updateContactInformation)
  await dashboardPage.updateContactInformation.click()
  await contactInfo.waitForPresence(await contactInfo.contactInformationHeader)
})

Then('I navigate to candidate home and update the mobile type', async (types:DataTable) => {
  await contactInfo.waitForClickable(await contactInfo.mobileTypeDropDown)
  await contactInfo.mobileTypeDropDown.click();
  const data = types.hashes();
  for (const row of data) {
    await contactInfo.selectMobileType(row.mobile_type)
    break
  }
  await contactInfo.mobileTypeDropDown.click();
});

