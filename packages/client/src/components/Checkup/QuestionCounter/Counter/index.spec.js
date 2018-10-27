import React from 'react'

import { shallow } from 'enzyme'

import Counter from './'

describe('components:styled:Counter', () => {
  it('renders the Counter and CSS properties properly', () => {
    expect(toJson(shallow(<Counter>Text</Counter>))).toMatchSnapshot()
  })
})
