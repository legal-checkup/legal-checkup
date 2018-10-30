import { ReactSelector } from 'testcafe-react-selectors'

class helpPage {
  constructor () {
    this.sectionLayout = ReactSelector('section h')
  }
}

export default new helpPage()
