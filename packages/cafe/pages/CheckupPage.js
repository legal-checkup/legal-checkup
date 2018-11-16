import {Selector, t} from 'testcafe'

class CheckupPage {
  constructor() {
    this.btnYes=Selector('.dWMGou')
  }

  async clickYes() {
    await t
      .click(this.btnYes)
  }
}

export default new CheckupPage()