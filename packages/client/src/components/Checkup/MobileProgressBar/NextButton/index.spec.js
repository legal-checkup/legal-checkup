import React from 'react'

import { shallow } from 'enzyme'

import NextButton from '.'

describe('components:styled:NextButton', () => {
  it('renders the NextButton and CSS properties properly', () => {
    expect(toJson(shallow(<NextButton>Click Me</NextButton>))).toMatchSnapshot()
  })
  it('renders the NextButton and CSS properties properly when enabled', () => {
    expect(
      toJson(shallow(<NextButton enabled>Click Me!</NextButton>))
    ).toMatchSnapshot()
  })
})
