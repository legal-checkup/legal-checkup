import {ReactSelector} from 'testcafe-react-selectors'

class AboutPage {
  constructor() {
    this.sectionLayout=ReactSelector('section a')
  }
}

export default new AboutPage()