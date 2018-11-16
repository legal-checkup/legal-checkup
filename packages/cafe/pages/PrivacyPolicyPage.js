import {ReactSelector} from 'testcafe-react-selectors'

class PrivacyPolicyPage {
  constructor() {
    this.sectionLayout=ReactSelector('section p')
  }
}

export default new PrivacyPolicyPage()