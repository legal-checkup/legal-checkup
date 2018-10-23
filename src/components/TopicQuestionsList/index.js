import { map } from 'ramda'
import React from 'react'

import TopicQuestions from '@containers/TopicQuestions'

export default function TopicQuestionsList ({ topics }) {
  return (
    <ul>
      {map(
        ({ id, name }) => (
          <TopicQuestions key={id} topic={name} />
        ),
        topics
      )}
    </ul>
  )
}
