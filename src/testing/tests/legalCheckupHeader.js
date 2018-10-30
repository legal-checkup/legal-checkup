import { Selector } from 'testcafe'
import homePage from '../pages/homePage'
import checkupPage from '../pages/checkupPage'

fixture`Legal Checkup`.page`http://localhost:3000` // declare the fixture // specify the start page

test('Desktop Header : Logo to site homepage', async t => {
  await t.expect(homePage.logo.innerText).eql('LOGO')
})
test('Desktop Header : legal checkup exists ', async t => {
  await t.expect(homePage.legalCheckup.innerText).eql('LEGAL CHECKUP')
})

test('Desktop Header : home exists ', async t => {
  await t.expect(homePage.home.innerText).eql('Home')
})

test('Desktop Header : Checkup link exists ', async t => {
  await t.expect(homePage.checkup.innerText).eql('Checkup')
})

test('Desktop Header : About link exists ', async t => {
  await t.expect(homePage.about.innerText).eql('About')
})

test('Desktop Header : help link exists ', async t => {
  await t.expect(homePage.help.innerText).eql('Help')
})

// test('Navigate to the checkup page', async t => {
//          await t
//              .click(checkupPage.innerText)
//             .navigateTo('http://localhost:3000/checkup');
//      });
