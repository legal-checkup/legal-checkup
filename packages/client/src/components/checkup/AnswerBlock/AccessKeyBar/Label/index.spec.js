import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import { KEYS } from '../../../../../state/constants'

import Label from './'

describe('components:checkup:AnswerBlock:AccessKeys:Label', function () {
  it(`matches the snapshot for type ${KEYS.A} on ${MOBILE} format`, () => {
    expect(create(<Label format={MOBILE} type={KEYS.A} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.B} on ${MOBILE} format`, () => {
    expect(create(<Label format={MOBILE} type={KEYS.B} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.esc} on ${MOBILE} format`, () => {
    expect(create(<Label format={MOBILE} type={KEYS.esc} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.A} on ${TABLET} format`, () => {
    expect(create(<Label format={TABLET} type={KEYS.A} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.B} on ${TABLET} format`, () => {
    expect(create(<Label format={TABLET} type={KEYS.B} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.esc} on ${TABLET} format`, () => {
    expect(create(<Label format={TABLET} type={KEYS.esc} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.A} on ${DESKTOP} format`, () => {
    expect(create(<Label format={DESKTOP} type={KEYS.A} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.B} on ${DESKTOP} format`, () => {
    expect(create(<Label format={DESKTOP} type={KEYS.B} />).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${KEYS.esc} on ${DESKTOP} format`, () => {
    expect(create(<Label format={DESKTOP} type={KEYS.esc} />).toJSON()).toMatchSnapshot()
  })
})
