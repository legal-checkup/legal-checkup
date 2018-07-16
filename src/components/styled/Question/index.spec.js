import React from 'react'
import { shallow } from 'enzyme'

import Question from '.'

describe('components:styled:Question', () => {
  it('renders the Question and CSS properties properly when no props passed', () => {
    expect(toJson(shallow(<Question>0</Question>))).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when disabled', () => {
    expect(toJson(shallow(<Question disabled>3</Question>))).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when active question', () => {
    expect(toJson(shallow(<Question active>2</Question>))).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when answered question', () => {
    expect(toJson(shallow(<Question answered>1</Question>))).toMatchSnapshot()
  })
})
