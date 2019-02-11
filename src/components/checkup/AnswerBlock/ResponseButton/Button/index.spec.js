import * as React from 'react'
import { create } from 'react-test-renderer'

import { NO, NOT_SURE, YES } from '../../../../../state/constants'

import Button from './'

describe('components:checkup:AnswerBlock:ResponseButton:Button', function () {
  it(`matches the snapshot for type ${NO}`, () => {
    expect(create(<Button type={NO}>{NO}</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${NOT_SURE}`, () => {
    expect(create(<Button type={NOT_SURE}>{NOT_SURE}</Button>).toJSON()).toMatchSnapshot()
  })

  it(`matches the snapshot for type ${YES}`, () => {
    expect(create(<Button type={YES}>{YES}</Button>).toJSON()).toMatchSnapshot()
  })
})
