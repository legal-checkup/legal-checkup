import React from 'react'
import { shallow } from 'enzyme'

import ProgressNav from '.'

describe('components:styled:ProgressNav', () => {
  it('renders the ProgressNav and CSS properties properly', () => {
    expect(
      toJson(shallow(<ProgressNav>StyledProgressNav</ProgressNav>))
    ).toMatchSnapshot()
  })
})
