import React from 'react'
import { shallow } from 'enzyme'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import Header from '.'

describe('components:layout:Header', () => {
  it(`renders properly when ${MOBILE} format is passed`, () => {
    expect(toJson(shallow(<Header format={MOBILE} />))).toMatchSnapshot()
  })

  it(`renders properly when ${TABLET} format is passed`, () => {
    expect(toJson(shallow(<Header format={TABLET} />))).toMatchSnapshot()
  })

  it(`renders properly when ${DESKTOP} format is passed`, () => {
    expect(toJson(shallow(<Header format={DESKTOP} />))).toMatchSnapshot()
  })
})
