import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '.'

describe('components:styled:NavButton', () => {
  it('renders the NavButton and CSS properties properly', () => {
    expect(toJson(shallow(<NavButton>&#x25C0;</NavButton>))).toMatchSnapshot()
  })

  it('renders the NavButton and CSS properties properly with onClick prop', () => {
    expect(
      toJson(shallow(<NavButton onClick={() => null}>&#x25C0;</NavButton>))
    ).toMatchSnapshot()
  })
})
