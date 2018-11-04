import { Selector } from 'testcafe'
import hm from '../pages/homePage'
import pr from '../pages/privacyPage'
import tp from '../pages/termsPage'

fixture`Legal Checkup`.page`http://localhost:3000/checkup` // declare the fixture // specify the start page

// then create a test and place your code there
test('Desktop Footer : Validate Footer Text', async t => {
  await t
    // Use the assertion to check if the actual footer text is equal to the expected one
    .expect(hm.footerCopyRight.innerText)
    .eql('© 2018 by Community Law Wellington and Hutt Valley')
})

test('Desktop Footer : Validate Community Law has external link to http://communitylaw.org.nz/', async t => {
  await t
    .expect(hm.footerCopyRight.getAttribute('href'))
    .eql('http://communitylaw.org.nz/')
})

test('Desktop Footer : Validate internal links to Privacy Page', async t => {
  hm.goToPrivacyPage()
  await t
    .expect(pr.sectionLayout.innerText)
    .eql('This is the Privacy Policy page')
})

// test('Desktop Header : Validate Internal Links to Terms of Use Page', async t => {
//   hm.goToTermsOfUsePage()
//   await t
//   .expect(tp.sectionLayout.innerText).eql('This is the Terms of Use page')
// })

// test('Desktop Header : Logo to site homepage', async t => {
//   await t
//   // write test ehre
// })
