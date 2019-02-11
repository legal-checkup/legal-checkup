import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

import Button from './'

describe('components:results:RedoButton:Button', function () {
  it(`matches the snapshot when format is ${DESKTOP}`, () => {
    expect(create(<Button format={DESKTOP} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}`, () => {
    expect(create(<Button format={MOBILE} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}`, () => {
    expect(create(<Button format={TABLET} />).toJSON()).toMatchSnapshot()
  })
})
