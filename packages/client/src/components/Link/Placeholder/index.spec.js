import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

import Placeholder from './'

describe('components:Link:Placeholder', () => {
  it(`matches the snapshot when format is ${DESKTOP}Footer`, () => {
    expect(create(<Placeholder format={`${DESKTOP}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Footer`, () => {
    expect(create(<Placeholder format={`${MOBILE}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Footer`, () => {
    expect(create(<Placeholder format={`${TABLET}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Header`, () => {
    expect(create(<Placeholder format={`${MOBILE}Header`} />).toJSON()).toMatchSnapshot()
  })
})
