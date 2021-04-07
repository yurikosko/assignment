import {Selector, t} from 'testcafe';

export class HomePage {
    constructor() {
        this.logo = {
            homePageLogo: Selector('div[data-at="logo-wrapper-homepage"]'),
            casinoLogo: Selector('a[data-at="product-casino"]')
        }

        this.regulationHeader = {
            gameBreak: Selector('a[data-at="regulation-header-spel-paus"]'),
            responsibleGaming: Selector(('a[data-at="regulation-header-responsible-gaming"]')),
            selfTest: Selector('a[data-at="regulation-header-self-test"]')
        }

        this.footer = {
            gameInspection: Selector('span[data-at="spelinspektionen-logo"]')
        }
    }
}