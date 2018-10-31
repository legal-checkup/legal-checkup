import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import { state } from '@state/fixtures'
import { NO } from '@state/constants'

const mockStore = configureStore()

const stateWithZeroYesAnswers = {
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

const store = mockStore(state)
const store2 = mockStore(stateWithZeroYesAnswers)

import ResultsHero from '.'

describe(`containers:ResultsHero`, () => {
  describe(`ResultsHero`, () => {
    it(`should render ResultsHero properly when yesCount > 0 `, () => {
      expect(
        toJson(shallow(<ResultsHero store={store} />).dive())
      ).toMatchSnapshot()
    })

    it(`should render ResultsHero properly when yesCount == 0`, () => {
      expect(
        toJson(shallow(<ResultsHero store={store2} />).dive())
      ).toMatchSnapshot()
    })
  })

  describe(`MapStateToProps`, () => {
    it(`should map yesCount to ResultsHero props`, () => {
      expect(shallow(<ResultsHero store={store} />).props().yesCount).toBe(1)
    })
  })
})
