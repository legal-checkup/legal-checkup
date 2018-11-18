import * as React from 'react'

import { shallow } from 'enzyme'

import Tablet from './'

describe(`components:responsive:Tablet`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const props = { myProp: 'myProp' }
    const wrapper = shallow(<Tablet {...props} />)

    expect(wrapper.props()).toEqual({
      minWidth: 768,
      maxWidth: 1279,
      myProp: 'myProp',
      values: {}
    })
  })
})
