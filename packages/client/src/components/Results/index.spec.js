import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import { state } from '../../state/fixtures'
import { NO } from '../../state/constants'
import Results from '.'

const mockStore = configureStore()

const stateWithZeroYesAnswers = {
  checkup: {
    responses: [
      {
        questions: [
          {
            answer: NO
          }
        ]
      }
    ]
  }
}

const store = mockStore(state)

const store2 = mockStore(stateWithZeroYesAnswers)

describe(`components:Results`, () => {
  describe(`Results`, () => {
    it(`should render Results properly when yesCount > 0 `, () => {
      expect(
        toJson(shallow(<Results store={store} />).dive())
      ).toMatchSnapshot()
    })

    it(`should render Results properly when yesCount == 0`, () => {
      expect(
        toJson(shallow(<Results store={store2} />).dive())
      ).toMatchSnapshot()
    })
  })

  describe(`MapStateToProps`, () => {
    it(`should map yesCount to props of Results component`, () => {
      expect(shallow(<Results store={store} />).props().yesCount).toBe(1)
    })
  })
})
