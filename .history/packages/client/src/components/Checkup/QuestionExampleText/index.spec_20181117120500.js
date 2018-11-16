import React from 'react'
import configureMockStore from 'redux-mock-store'

import { shallow } from 'enzyme'
import { path } from 'ramda'

import { state } from '../../../../state/fixtures'
import QuestionExampleText from '.'
const mockStore = configureMockStore()
const store = mockStore(state)
describe(`containers:QuestionExampleText`, () => {
  it(`should render the QuestionExampleText with the correct css`, () => {
    expect(
      toJson(shallow(<QuestionExampleText store={store} />))
    ).toMatchSnapshot()
  })
  it(`should map help text to QuestionExampleText's children prop`, () => {
    const stateTree = path(['checkup', 'topics', 0, 'questions', 0, 'help'], state)
    expect(
      shallow(<QuestionExampleText store={store} />).props().children
    ).toBe(stateTree)
  })
})
