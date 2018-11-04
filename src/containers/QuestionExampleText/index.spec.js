import React from 'react'
import { shallow } from 'enzyme'
import { path } from 'ramda'

import { state } from '../../state/fixtures'
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore()

const store = mockStore(state)

import QuestionExampleText from '.'

describe(`containers:QuestionExampleText`, () => {
  it(`should render the QuestionExampleText with the correct css`, () => {
    expect(
      toJson(shallow(<QuestionExampleText store={store} />))
    ).toMatchSnapshot()
  })

  it(`should map help text to QuestionExampleText's children prop`, () => {
    const stateTree = path(['topics', 0, 'questions', 0, 'help'], state)
    expect(
      shallow(<QuestionExampleText store={store} />).props().children
    ).toBe(stateTree)
  })
})
