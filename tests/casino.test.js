import {CasinoPage} from "../pages/CasinoPage";
import {HomePage} from "../pages/HomePage";

const casinoPage = new CasinoPage();
const homePage = new HomePage();

fixture `Casino page tests`
    .page `https://www.hajper.com/`
    .beforeEach(async t => {
        await t.maximizeWindow()
    });


test('Verify that favorite game can be only added by logged in user', async t => {
    await t.expect(homePage.logo.homePageLogo.exists).ok('Home page logo is not shown!')
            .click(homePage.logo.casinoLogo)
            .click(casinoPage.icons.loveIcon)
            .expect(casinoPage.errors.notificationError.exists).ok("Notification is not shown!");
});