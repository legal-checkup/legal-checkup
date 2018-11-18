import * as React from 'react'
import { create } from 'react-test-renderer'

import Topic from './'

describe('components:checkup:ProgressBar:CurrentTopic:Topic', () => {
  it('matches the snapshot', () => {
    expect(create(<Topic>This Topic</Topic>).toJSON()).toMatchSnapshot()
  })
})
