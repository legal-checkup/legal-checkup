import * as React from 'react'
import { create } from 'react-test-renderer'

import { A, B, esc } from '../../../../../state/constants'

import Key from './'

describe('components:checkup:AnswerBlock:AccessKey:Key', function () {
  it(`matches the snapshot for type ${B}`, () => {
    expect(create(<Key type={B}>{B}</Key>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${esc}`, () => {
    expect(create(<Key type={esc}>{esc}</Key>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${A}`, () => {
    expect(create(<Key type={A}>{A}</Key>).toJSON()).toMatchSnapshot()
  })
})
