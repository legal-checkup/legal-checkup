import React from 'react'
import { shallow } from 'enzyme'

import QuestionExampleText from '.'

describe('components:styled:QuestionExampleText', () => {
  it('renders the QuestionExampleText component with the proper CSS styles', () => {
    expect(toJson(shallow(<QuestionExampleText />))).toMatchSnapshot()
  })
})
