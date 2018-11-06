import {ReactSelector} from 'testcafe-react-selectors'

class TermsOfUsePage {
  constructor() {
    this.sectionLayout=ReactSelector('section p')
  }
}

export default new TermsOfUsePage()