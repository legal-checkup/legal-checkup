import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'

import Bar from './'

describe('components:checkup:AnswerBlock:Bar', function () {
  it(`matches the snapshot for ${MOBILE} format`, () => {
    expect(create(<Bar format={MOBILE}>Bar</Bar>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for ${TABLET} format`, () => {
    expect(create(<Bar format={TABLET}>Bar</Bar>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for ${DESKTOP} format`, () => {
    expect(create(<Bar format={DESKTOP}>Bar</Bar>).toJSON()).toMatchSnapshot()
  })
})
