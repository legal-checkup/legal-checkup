import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

import LinkExternal from './'

describe('components:Link:LinkExternal', () => {
  it(`matches the snapshot when format is ${DESKTOP}Footer`, () => {
    expect(create(<LinkExternal format={`${DESKTOP}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${DESKTOP}Section`, () => {
    expect(create(<LinkExternal format={`${DESKTOP}Section`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Footer`, () => {
    expect(create(<LinkExternal format={`${MOBILE}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}Section`, () => {
    expect(create(<LinkExternal format={`${MOBILE}Section`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Footer`, () => {
    expect(create(<LinkExternal format={`${TABLET}Footer`} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}Section`, () => {
    expect(create(<LinkExternal format={`${TABLET}Section`} />).toJSON()).toMatchSnapshot()
  })
})
