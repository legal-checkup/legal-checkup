import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ProgressBar from '.'

const mockStore = configureStore()

describe('containers:ProgressBar', () => {
  it('should map ProgressBar to props', () => {
    const activeQuestion = 1
    const store = mockStore({ activeQuestion: 1, questions: {} })
    const wrapper = shallow(<ProgressBar store={store} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        ProgressBar: expect.any(String)
      })
    )
  })
})
