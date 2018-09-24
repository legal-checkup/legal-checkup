import React from 'react'
import { shallow } from 'enzyme'

import NoButton from '.'

describe('components:styled:NoButton', () => {
  it('renders the NoButton and CSS properties properly', () => {
    expect(toJson(shallow(<NoButton />))).toMatchSnapshot()
  })
})
