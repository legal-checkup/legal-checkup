import React from 'react'
import { shallow } from 'enzyme'

import LinkInternal from './'

describe('components:styled:LinkInternal', () => {
  it('renders the LinkInternal and CSS properties properly', () => {
    expect(
      toJson(shallow(<LinkInternal>Click Me</LinkInternal>))
    ).toMatchSnapshot()
  })
})
