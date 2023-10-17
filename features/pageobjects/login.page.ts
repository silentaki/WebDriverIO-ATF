import { $ } from '@wdio/globals'
import Page from './page.ts';


class LoginPage extends Page {
     get username () {
        return $('[data-automation-id="email"]');
    }

    get password () {
        return $('[data-automation-id="password"]');
    }

     get signIn () {
        return $('[data-automation-id="click_filter"]+button');
    }

    async login (username: string, password: string) {
        await super.type(await this.username, username)
        await super.type(await this.password, password)
        await browser.pause(3000);
        (await this.signIn).isClickable().then(() =>{
            this.signIn.click()
        })
        await browser.keys("Tab");
        await browser.keys("Enter")
    }

    async gotoUrl() {
        browser.url('https://workday.wd5.myworkdayjobs.com/en-US/Workday/login');
    }
}

export const loginPage = new LoginPage();
