import { Selector, t } from 'testcafe'

class ResultsPage {
  constructor () {
    this.pageTitle = Selector('#root > section > p')
    this.zeroYesAnswer = Selector('#root > section > div > p')
    this.yesAnswer = Selector('#root > section > div > p:nth-child(1)')
    this.endText = Selector('#root > section > div > p')
  }

  async goToResultsPage () {
    await t.click(this.ResultsPage)
  }
}

export default new ResultsPage()
