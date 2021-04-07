import {HomePage} from "../pages/HomePage";

const homePage = new HomePage();

fixture `Home page tests`
    .page `https://www.hajper.com/`
    .beforeEach(async t => {
        await t.maximizeWindow()
    });


test('Verify that page is loaded correctly', async t => {
    await t.expect(homePage.logo.homePageLogo.exists).ok('Home page logo is not shown!')
            .expect(homePage.regulationHeader.gameBreak.exists).ok('game break logo is not shown')
            .expect(homePage.regulationHeader.responsibleGaming.exists).ok('responsible gaming is not shown')
            .expect(homePage.regulationHeader.selfTest.exists).ok('self test is not shown')
            .expect(homePage.footer.gameInspection.exists).ok('game inspection is not shown');
});