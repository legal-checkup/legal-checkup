import React from 'react'
import { shallow } from 'enzyme'

import YesButton from '.'

describe('components:styled:YesButton', () => {
  it('renders the YesButton and CSS properties properly', () => {
    expect(toJson(shallow(<YesButton />))).toMatchSnapshot()
  })
})
