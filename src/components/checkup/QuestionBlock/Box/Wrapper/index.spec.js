import * as React from 'react'
import { create } from 'react-test-renderer'

import Wrapper from './'

describe('components:checkup:QuestionBlock:Box:Wrapper', function () {
  it('matches the snapshot', () => {
    expect(create(<Wrapper>Wrapper</Wrapper>).toJSON()).toMatchSnapshot()
  })
})
