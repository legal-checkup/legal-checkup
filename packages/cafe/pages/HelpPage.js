import {ReactSelector} from 'testcafe-react-selectors'

class HelpPage {
  constructor() {
    this.sectionLayout=ReactSelector('section h')
  }
}

export default new HelpPage()