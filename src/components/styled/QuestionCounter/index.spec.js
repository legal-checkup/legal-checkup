import React from 'react'
import { shallow } from 'enzyme'

import QuestionCounter from '.'

describe('components:styled:QuestionCounter', () => {
  it('renders the QuestionCounter component with proper CSS properties', () => {
    expect(toJson(shallow(<QuestionCounter />))).toMatchSnapshot()
  })
})
