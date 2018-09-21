import React from 'react'
import { shallow } from 'enzyme'

import configureStore from 'redux-mock-store'

import ProgressBar from '.'
import { getQuestionNumber } from './QuestionNumber'

import { initialState } from '../../state'

const mockStore = configureStore()

describe('components:ProgressBar', function () {
  it('renders the ProgressBar and CSS properties properly', () =>
    expect(
      toJson(shallow(<ProgressBar>ProgressBar</ProgressBar>))
    ).toMatchSnapshot())

  it(`renders the questionNumber CSS properties properly`, () => {
    const questionNumber = 1
    const activeQuestion = 3
    const store = mockStore(initialState)

    store.dispatch = jest.fn()

    const wrapper = shallow(
      <ProgressBar store={store} activeQuestion={getQuestionNumber} />
    )

    wrapper.props().getQuestionNumber()

    expect(store.dispatch).toHaveBeenCalledWith({})
  })
})
