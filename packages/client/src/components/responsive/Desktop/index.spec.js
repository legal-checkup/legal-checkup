import * as React from 'react'

import { shallow } from 'enzyme'

import Desktop from './'

describe(`components:responsive:Desktop`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const props = { myProp: 'myProp' }
    const wrapper = shallow(<Desktop {...props} />)

    expect(wrapper.props()).toEqual({
      minWidth: 1280,
      myProp: 'myProp',
      values: {}
    })
  })
})
