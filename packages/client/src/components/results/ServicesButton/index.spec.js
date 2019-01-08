import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

import ServicesButton from './'

describe('components:results:ServicesButton', function () {
  it(`matches the snapshot when format is ${DESKTOP}`, () => {
    expect(create(<ServicesButton format={DESKTOP} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}`, () => {
    expect(create(<ServicesButton format={MOBILE} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}`, () => {
    expect(create(<ServicesButton format={TABLET} />).toJSON()).toMatchSnapshot()
  })
})
