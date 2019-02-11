import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

import Wrapper from './'

describe('components:layout:Footer:Wrapper', () => {
  it(`matches the snapshot when format is ${DESKTOP}`, () => {
    expect(create(<Wrapper format={DESKTOP} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}`, () => {
    expect(create(<Wrapper format={MOBILE} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}`, () => {
    expect(create(<Wrapper format={TABLET} />).toJSON()).toMatchSnapshot()
  })
})
