import * as React from 'react'
import { create } from 'react-test-renderer'

import Logo from './'
import { MOBILE, TABLET, DESKTOP } from '../../../../../constants'

describe('components:layout:Header:LinkedLogo:Logo', function () {
  it(`renders proper css for ${MOBILE} format`, () => {
    expect(create(<Logo format={MOBILE}>Logo</Logo>).toJSON()).toMatchSnapshot()
  })

  it(`renders proper css for ${TABLET} format`, () => {
    expect(create(<Logo format={TABLET}>Logo</Logo>).toJSON()).toMatchSnapshot()
  })

  it(`renders proper css for ${DESKTOP} format`, () => {
    expect(
      create(<Logo format={DESKTOP}>Logo</Logo>).toJSON()
    ).toMatchSnapshot()
  })

  it(`renders proper css when active prop is passed`, () => {
    expect(create(<Logo active>Logo</Logo>).toJSON()).toMatchSnapshot()
  })
})
