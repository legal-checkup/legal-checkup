import * as React from 'react'
import { create } from 'react-test-renderer'

import Bar from './'

describe('components:checkup:AnswerBlock:Bar', function () {
  it('matches the snapshot', () => {
    expect(create(<Bar>Bar</Bar>).toJSON()).toMatchSnapshot()
  })
})
