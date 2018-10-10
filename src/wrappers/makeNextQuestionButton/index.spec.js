import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { state } from '../../state/fixtures'
import makeNextQuestionButton from '.'
import StyledDesktopNextButton from '@components/styled/DesktopNextButton'

const mockStore = configureStore()
const NextButton = makeNextQuestionButton(StyledDesktopNextButton)

describe('wrappers:makeNextQuestionButton', () => {
  it(`maps state and dispatch to props`, () => {
    const store = mockStore(state)
    const wrapper = shallow(<NextButton store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        children: '▶',
        enabled: true
      })
    )
  })
})
