import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '.'

describe('components:styled:NavButton', () => {
  it('renders the NavButton and CSS properties properly when no type', () => {
    expect(
      toJson(shallow(<NavButton>StyledNavButton</NavButton>))
    ).toMatchSnapshot()
  })

  it('renders the NavButton and CSS properties properly when type is back', () => {
    expect(
      toJson(shallow(<NavButton type='back'>StyledNavButton</NavButton>))
    ).toMatchSnapshot()
  })

  it('renders the NavButton and CSS properties properly when type is forward', () => {
    expect(
      toJson(shallow(<NavButton type='forward'>StyledNavButton</NavButton>))
    ).toMatchSnapshot()
  })
})
