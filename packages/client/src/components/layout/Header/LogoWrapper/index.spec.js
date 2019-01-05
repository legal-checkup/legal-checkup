import React from 'react'
import { shallow } from 'enzyme'

import LogoWrapper from '.'

describe(`Header:LogoWrapper`, () => {
  it(`Renders the LogoWrapper with the correct CSS styles`, () => {
    expect(toJson(shallow(<LogoWrapper />))).toMatchSnapshot()
  })
})
