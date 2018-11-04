import React from 'react'
import { shallow } from 'enzyme'
import AnswerBar from '.'

describe('containers:AnswerBar', () => {
  it('renders the AnswerBar', () => {
    expect(toJson(shallow(<AnswerBar />))).toMatchSnapshot()
  })
})
