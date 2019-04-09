import * as React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'
import styled from 'styled-components'

import TopicQuestions from './TopicQuestions'
import TopicName from './TopicName'
import Button from '../Button'

import {
  makeGetTopicQuestions,
  getCurrentTopicName,
  getActiveQuestionIndex
} from '../../../../state/selectors'

import makeQuestionButton from '../../wrappers/makeQuestionButton'

const CenteredTopic = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1px;
  height: 1px;
`

function TopicBar ({
  topic,
  topicQuestions = [],
  activeTopic,
  activeQuestionIndex
}) {
  return (
    <TopicQuestions>
      <CenteredTopic>
        <TopicName activeTopic={activeTopic}>{topic}</TopicName>
      </CenteredTopic>
      <>
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
      </>
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
