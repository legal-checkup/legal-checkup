import { shallow } from 'enzyme'
import React from 'react'

import { Desktop, Tablet, Mobile, Default } from '.'

describe(`responsive:Desktop`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const wrapper = shallow(<Desktop myProp={'myProp'} />)

    expect(wrapper.props()).toEqual({
      minWidth: 1280,
      myProp: 'myProp',
      values: {}
    })
  })
})

describe(`responsive:Tablet`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const wrapper = shallow(<Tablet myProp={'myProp'} />)

    expect(wrapper.props()).toEqual({
      minWidth: 768,
      maxWidth: 1279,
      myProp: 'myProp',
      values: {}
    })
  })
})

describe(`responsive:Mobile`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const wrapper = shallow(<Mobile myProp={'myProp'} />)

    expect(wrapper.props()).toEqual({
      minWidth: 320,
      maxWidth: 767,
      myProp: 'myProp',
      values: {}
    })
  })
})

describe(`responsive:Default`, () => {
  it(`should return the Responsive component with the correct props`, () => {
    const wrapper = shallow(<Default myProp={'myProp'} />)

    expect(wrapper.props()).toEqual({
      maxWidth: 319,
      myProp: 'myProp',
      values: {}
    })
  })
})
