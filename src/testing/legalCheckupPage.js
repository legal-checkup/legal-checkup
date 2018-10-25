import { Selector } from 'testcafe'

fixture`Legal Checkup`.page`http://localhost:3000/checkup` // declare the fixture // specify the start page

// then create a test and place your code there
test('Desktop Footer : Validate Footer Text', async t => {
  await t
    // Use the assertion to check if the actual footer text is equal to the expected one
    .expect(Selector('.LinkExternalMobile-sc-1suge14-0').innerText)
    .eql('© 2018 Community Law')
})

test('Desktop Footer : Validate Community Law has external link to http://communitylaw.org.nz/', async t => {
  await t
  // write test here
})

test('Desktop Footer : Validate internal links to the pages', async t => {
  await t
  // write test here
})

test('Desktop Header : Validate Internal Links', async t => {
  await t
  // write test here
})

test('Desktop Header : Logo to site homepage', async t => {
  await t
  // write test ehre
})
