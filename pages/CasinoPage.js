import {Selector} from 'testcafe';

export class CasinoPage {
    constructor() {
        this.icons = {
            loveIcon: Selector('button[data-at="love-icon"]')
        }

        this.errors = {
            notificationError: Selector('div[class="notification-wrap__error"]')
        }
    }
}