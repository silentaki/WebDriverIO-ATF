import Page from './page.ts';
import { $ } from '@wdio/globals'

class ContactInfo extends Page {

    get contactInformationHeader() {
        return $('[data-automation-id="fieldSetLegendLabel"]')
    }

    get city() {
        return $('//div[text()="City"]/parent::div/following-sibling::div//input')
    }

    get ok() {
        return $('[data-automation-id="wd-CommandButton_uic_okButton"]')
    }

    get mobileTypeDropDown() {
        return $('[data-metadata-id="dropDownSelectList.phoneDeviceType"]')
    }

        async selectMobileType(type: string) {
        return (await $(`[data-automation-label="${type}"]`)).click()
    }
}

export const contactInfo = new ContactInfo()