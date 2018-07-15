import React from 'react'
import { shallow } from 'enzyme'

import Question from '.'

describe('components:styled:Question', () => {
  it('renders the Question and CSS properties properly when not current or answered', () => {
    expect(
      toJson(shallow(<Question>StyledQuestion</Question>))
    ).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when current question', () => {
    expect(
      toJson(shallow(<Question active>StyledQuestion</Question>))
    ).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when answered question', () => {
    expect(
      toJson(shallow(<Question answered>StyledQuestion</Question>))
    ).toMatchSnapshot()
  })
})
