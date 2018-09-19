import React from 'react'
import { shallow } from 'enzyme'

import NotSureButton from '.'

describe('components:styled:NotSureButton', () => {
  it('renders the NotSureButton and CSS properties properly', () => {
    expect(toJson(shallow(<NotSureButton />))).toMatchSnapshot()
  })
})
