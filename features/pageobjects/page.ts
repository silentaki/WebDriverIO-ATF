export default class Page {
    async waitForElementToHaveText(element: WebdriverIO.Element, expectedText: string, timeoutValue = 5000) {
        await browser.waitUntil(async () => (await element.getText()).includes(expectedText), {
          timeout: timeoutValue,
          timeoutMsg: `Exception : waitForElementToHaveText - text (${expectedText}) did not appear on element (${element.selector}) even after timeout of ${timeoutValue} MilliSeconds`,
        });
      }

      async waitForClickable(element: WebdriverIO.Element, timeoutValue = 30000) {
        await element.waitForClickable({
          timeout: timeoutValue,
          timeoutMsg: `Exception : waitForClickable - Element (${element.selector}) not clickable even after timeout of ${timeoutValue} MilliSeconds.`,
        });
      }

      async waitForPresence(element: WebdriverIO.Element, timeoutValue = 5000) {
        await element.isExisting();
        await element.waitForDisplayed({
          timeout: timeoutValue,
          timeoutMsg: `Exception : waitForPresence - element (${element.selector}) did not appear even after timeout of ${timeoutValue} MilliSeconds`,
        });
      }

      async type(element: WebdriverIO.Element, sendKeys: string | number, timeoutValue = 5000) {
        await this.waitForPresence(element, timeoutValue);
        await this.waitForClickable(element, timeoutValue);
        await element.setValue(sendKeys);
      }

}
