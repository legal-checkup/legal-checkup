import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { state } from '../../state/fixtures'

import QuestionCounter from '.'

const mockStore = configureStore()

const store = mockStore(state)

describe('containers:QuestionCounter', () => {
  it('renders the QuestionCounter', () => {
    expect(toJson(shallow(<QuestionCounter store={store} />))).toMatchSnapshot()
  })

  it('should map questionCount to props with defaultType', () => {
    const wrapper = shallow(<QuestionCounter store={store} />)
    expect(wrapper.props().children).toBe('1/28')
  })
})
