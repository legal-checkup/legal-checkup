import * as React from 'react'
import { create } from 'react-test-renderer'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'
import ProgressBar from '.'

describe('components:checkup:ProgressBlock:ProgressBar', () => {
  it(`matches the snapshot when format is ${DESKTOP}`, () => {
    expect(create(<ProgressBar format={`${DESKTOP}`}>ProgressBar</ProgressBar>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${MOBILE}`, () => {
    expect(create(<ProgressBar format={`${MOBILE}`}>ProgressBar</ProgressBar>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot when format is ${TABLET}`, () => {
    expect(create(<ProgressBar format={`${TABLET}`}>ProgressBar</ProgressBar>).toJSON()).toMatchSnapshot()
  })
})
