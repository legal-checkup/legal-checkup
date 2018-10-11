import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { state } from '../../state/fixtures'
import makeQuestionButton from '.'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'
import { QUESTION_REQUESTED } from '@state/constants'

const mockStore = configureStore()
const QuestionButton = makeQuestionButton(StyledDesktopQuestionButton)

describe('wrappers:makeQuestionButton', () => {
  it(`maps state and dispatch to props`, () => {
    const store = mockStore(state)
    const questionIndex = 2
    const wrapper = shallow(
      <QuestionButton store={store} questionIndex={questionIndex} />
    )
    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        enabled: true,
        onClick: {
          type: QUESTION_REQUESTED,
          payload: { questionIndex }
        }
      })
    )
  })
})
