import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import { state } from '@state/fixtures'

const mockStore = configureStore()

const store = mockStore(state)

import ResultsHero from '.'

describe(`containers:ResultsHero`, () => {
  describe(`ResultsHero`, () => {
    it(`should display expand controller when yesCount > 0`, () => {
      expect(toJson(shallow(<ResultsHero store={store} />))).toMatchSnapshot()
    })

    it(`should display ResultsHero`, () => {
      expect(
        toJson(shallow(<ResultsHero store={store} />).dive())
      ).toMatchSnapshot()
    })

    it(`should map yesCount to ResultsHero props`, () => {
      expect(shallow(<ResultsHero store={store} />).props().yesCount).toBe(1)
    })
  })

  describe(`MapStateToProps`, () => {
    it(`should map yesCount to ResultsHero props`, () => {
      expect(shallow(<ResultsHero store={store} />).props().yesCount).toBe(1)
    })
  })
})
