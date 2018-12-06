import * as React from 'react'
import { create } from 'react-test-renderer'

import BarBottom from './'

describe('components:checkup:AnswerBlock:BarBottom', function () {
  it('matches the snapshot', () => {
    expect(create(<BarBottom>BarBottom</BarBottom>).toJSON()).toMatchSnapshot()
  })
})
