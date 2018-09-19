import React from 'react'
import { shallow } from 'enzyme'

import PreviousQuestions from '.'

describe('components:styled:PreviousQuestions', () => {
  it('renders the PreviousQuestions CSS properties properly', () => {
    expect(toJson(shallow(<PreviousQuestions />))).toMatchSnapshot()
  })

  it('renders the PreviousQuestions properly with enalbed prop', () => {
    expect(toJson(shallow(<PreviousQuestions enabled />))).toMatchSnapshot()
  })
})
