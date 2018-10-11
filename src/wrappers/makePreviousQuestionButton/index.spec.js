import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { state } from '../../state/fixtures'
import makePreviousQuestionButton from '.'
import StyledDesktopPreviousButton from '@components/styled/DesktopPreviousButton'

const mockStore = configureStore()
const PreviousButton = makePreviousQuestionButton(StyledDesktopPreviousButton)

describe('wrappers:makePreviousQuestionButton', () => {
  it(`maps state and dispatch to props`, () => {
    const store = mockStore(state)
    const wrapper = shallow(<PreviousButton store={store} />)
    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        children: '◀',
        enabled: false
      })
    )
  })
})
