import ResultsPage from '../pages/ResultsPage'
import HomePage from '../pages/HomePage'
import CheckupPage from '../pages/CheckupPage'

fixture`Legal Checkup`.page`http://localhost:3000/results` // declare the fixture // specify the start page

// then create a test and place your code there
test.skip('Desktop ResultsPage : Validate resultpage Text', async t => {
 await t
   // Use the assertion to check if the actual result text is equal to the expected one
   .expect(ResultsPage.pageTitle.innerText)
   .eql('This is the Results page')
})

test('Desktop ResultsPage : Validate if Yes > 0 answer reply Text', async t => {
 HomePage.gotoCheckupPage()
 let i = 0
 while( i < 28){
     CheckupPage.clickYes()
     i++
   }
 await t
   //Use the assertion to check if the actual result text is equal to the expected one
     .expect(ResultsPage.yesAnswer.innerText).eql(
     'Based on your answers, a lawyer may be able to help you with...'
   )
})

test.skip('Desktop ResultsPage : Validate if Yes = 0 answer reply Text', async t => {
 await t
   // Use the assertion to check if the actual result text is equal to the expected one
   .expect(ResultsPage.zeroYesAnswer.innerText)
   .eql(
     "Based on your answers, it looks like you're in good legal health! But if you have a problem, or something worrying you that wasn't covered by the questions in this check-up, do come talk to us at Community Law"
   )
})

// to write the test case about if Yes > 0 I feel below is the process which will have to be carried out,
// go to hompage, click on checkup, click on answer "yes" from question one to question 28, expect answer to be "based on your anwers, A lawyer may
// able to help you with..."

test.skip('Desktop resultPage: Validate end text', async t => {
 await t
   .expect(ResultsPage.endText.innerText)
   .eql(
     'You can get free legal advice about these (or any other problem) from your local Community Law Centre'
   )
})
// go to hompage, click on checkup, click on answer yes from question one to question 28, expect answer to be "based on your anwers, A lawyer may
// able to help you with..."