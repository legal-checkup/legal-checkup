import * as React from 'react'
import { create } from 'react-test-renderer'

import TopicQuestions from './'

describe('components:checkup:ProgressBar:CurrentTopic:TopicQuestions', () => {
  it('matches the snapshot', () => {
    expect(
      create(<TopicQuestions>TopicQuestions</TopicQuestions>).toJSON()
    ).toMatchSnapshot()
  })
})
