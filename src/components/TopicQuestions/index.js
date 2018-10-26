import { map } from 'ramda'
import React from 'react'

import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'

import StyledTopicQuestions from '@components/styled/TopicQuestions'

import makeQuestionButton from '@wrappers/makeQuestionButton'

export default function TopicQuestions ({ topic, topicQuestions, activeTopic }) {
  console.log('compoent', activeTopic)
  return (
    <StyledTopicQuestions>
      <div>{topic}</div>
      <div>
        {map(({ id, index }) => {
          const QuestionButton = makeQuestionButton(StyledDesktopQuestionButton)

          return (
            <QuestionButton key={id} questionIndex={index}>
              {index + 1}
            </QuestionButton>
          )
        }, topicQuestions)}
      </div>
    </StyledTopicQuestions>
  )
}
