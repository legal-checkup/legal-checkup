import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

import LinkInternal from './'

describe('components:Link:LinkInternal', () => {
  it(`matches the snapshot when format is ${DESKTOP}Footer`, () => {
    expect(create(<LinkInternal format={`${DESKTOP}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Footer`, () => {
    expect(create(<LinkInternal format={`${MOBILE}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Footer`, () => {
    expect(create(<LinkInternal format={`${TABLET}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Header`, () => {
    expect(create(<LinkInternal format={`${MOBILE}Header`} />).toJSON()).toMatchSnapshot()
  })
})
