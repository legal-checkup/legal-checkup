import React from 'react'
import { shallow } from 'enzyme'

import LogoImage from '.'

describe(`Header:LogoImage`, () => {
  it(`Returns the LogoImage svg correctly`, () => {
    expect(toJson(shallow(<LogoImage />))).toMatchSnapshot()
  })
})
