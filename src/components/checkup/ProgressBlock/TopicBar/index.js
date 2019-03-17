import * as React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import TopicQuestions from './TopicQuestions'
import TopicName from './TopicName'
import Button from '../Button'

import {
  makeGetTopicQuestions,
  getCurrentTopicName,
  getActiveQuestionIndex
} from '../../../../state/selectors'

import makeQuestionButton from '../../wrappers/makeQuestionButton'

function TopicBar ({
  topic,
  topicQuestions = [],
  activeTopic,
  activeQuestionIndex
}) {
  return (
    <TopicQuestions activeTopic={activeTopic}>
      <TopicName activeTopic={activeTopic}>{topic}</TopicName>
      <div>
        {isNonEmptyArray(topicQuestions) &&
          map(({ id, index }) => {
            const QuestionButton = makeQuestionButton(Button)

            return (
              <QuestionButton
                key={id}
                questionIndex={index}
                active={activeQuestionIndex === index}
              >
                {index + 1}
              </QuestionButton>
            )
          }, topicQuestions)}
      </div>
    </TopicQuestions>
  )
}

function makeMapStateToProps () {
  const getTopicQuestions = makeGetTopicQuestions()

  return function mapStateToProps ({ checkup }, { topic }) {
    return {
      topicQuestions: getTopicQuestions(checkup, { topic }),
      activeQuestionIndex: getActiveQuestionIndex(checkup),
      activeTopic: getCurrentTopicName(checkup) === topic
    }
  }
}

export default connect(makeMapStateToProps)(TopicBar)
