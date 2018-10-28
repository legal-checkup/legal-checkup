import { ReactSelector } from 'testcafe-react-selectors'

class TermsPage {
  constructor () {
    this.sectionLayout = ReactSelector('section p')
  }
}

export default new TermsPage()
