import {Selector} from 'testcafe'

import CheckupPage from '../pages/CheckupPage'
import HomePage from '../pages/HomePage'

fixture`Legal Checkup`.page`http://localhost:3000` // declare the fixture // specify the start page

test('Desktop Header : Logo to site homepage',async t => {
  await t.expect(HomePage.logo.innerText).eql('LOGO')
})
test('Desktop Header : legal checkup exists ',async t => {
  await t.expect(HomePage.legalCheckup.innerText).eql('LEGAL CHECKUP')
})

test('Desktop Header : home exists ',async t => {
  await t.expect(HomePage.home.innerText).eql('Home')
})

test('Desktop Header : Checkup link exists ',async t => {
  await t.expect(HomePage.checkup.innerText).eql('Checkup')
})

test('Desktop Header : About link exists ',async t => {
  await t.expect(HomePage.about.innerText).eql('About')
})

test('Desktop Header : help link exists ',async t => {
  await t.expect(HomePage.help.innerText).eql('Help')
})

// test('Navigate to the checkup page', async t => {
//          await t
//              .click(CheckupPage.innerText)
//             .navigateTo('http://localhost:3000/checkup');
//      });