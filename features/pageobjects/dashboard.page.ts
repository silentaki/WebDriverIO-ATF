import { $ } from '@wdio/globals'
import Page from './page.ts';

class DashBoardPage extends Page {
    get welcomeText() {
        return $('[data-automation-id="welcomeMsgHeader"]')
    }

    get candidateHome() {
        return $('[data-automation-id="navigationItem-Candidate Home"]')
    }

    get updateContactInformation() {
        return $('[data-automation-id="updateContactInfo"]')
    }
}

export const dashboardPage = new DashBoardPage();