import React from 'react'
import { shallow } from 'enzyme'

import QuestionBox from '.'

describe('components:styled:QuestionBox', () => {
  it('renders the QuestionBox component with proper CSS properties', () =>
    expect(toJson(shallow(<QuestionBox />))).toMatchSnapshot())
})
