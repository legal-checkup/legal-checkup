import * as React from 'react'

import { shallow } from 'enzyme'

import Mobile from './'

describe(`components:responsive:Mobile`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const props = { myProp: 'myProp' }
    const wrapper = shallow(<Mobile {...props} />)

    expect(wrapper.props()).toEqual({
      'data-testid': 'responsive',
      maxWidth: 767,
      myProp: 'myProp',
      values: {}
    })
  })
})
