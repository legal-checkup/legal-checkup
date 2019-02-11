import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, TABLET, MOBILE } from '../../../../constants'
import Wrapper from './'

describe('components:layout:Header:Wrapper', () => {
  it(`renders the Header and CSS properties properly when format is ${DESKTOP}`, () => {
    expect(
      create(<Wrapper format={DESKTOP}>Wrapper</Wrapper>).toJSON()
    ).toMatchSnapshot()
  })

  it(`renders the Header and CSS properties properly when format is ${TABLET}`, () => {
    expect(
      create(<Wrapper format={TABLET}>Wrapper</Wrapper>).toJSON()
    ).toMatchSnapshot()
  })

  it(`renders the Header and CSS properties properly when format is ${MOBILE}`, () => {
    expect(
      create(<Wrapper format={MOBILE}>Wrapper</Wrapper>).toJSON()
    ).toMatchSnapshot()
  })
})
