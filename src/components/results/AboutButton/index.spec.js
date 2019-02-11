import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

import AboutButton from './'

describe('components:results:AboutButton', function () {
  it(`matches the snapshot when format is ${DESKTOP}`, () => {
    expect(create(<AboutButton format={DESKTOP} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}`, () => {
    expect(create(<AboutButton format={MOBILE} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}`, () => {
    expect(create(<AboutButton format={TABLET} />).toJSON()).toMatchSnapshot()
  })
})
