import * as React from 'react'
import { create } from 'react-test-renderer'

import TopicName from './'

describe('components:checkup:ProgressBar:CurrentTopic:TopicName', () => {
  it('matches the snapshot', () => {
    expect(create(<TopicName>TopicName</TopicName>).toJSON()).toMatchSnapshot()
  })
})
