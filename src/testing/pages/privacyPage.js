import { ReactSelector } from 'testcafe-react-selectors'

class PrivacyPage {
  constructor () {
    this.sectionLayout = ReactSelector('section p')
  }
}

export default new PrivacyPage()
