import React from 'react'
import { shallow } from 'enzyme'

import ActiveQuestionNumber from '.'

describe('styled:ActiveQuestionNumber', () => {
  it('renders the ActiveQuestionNumber and CSS properties properly', () => {
    expect(toJson(shallow(<ActiveQuestionNumber />))).toMatchSnapshot()
  })
})
