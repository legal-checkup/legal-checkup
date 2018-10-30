import { ReactSelector } from 'testcafe-react-selectors'

class aboutPage {
  constructor () {
    this.sectionLayout = ReactSelector('section a')
  }
}

export default new aboutPage()
