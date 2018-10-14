import React from 'react'

import StyledTopicQuestions from '@components/styled/TopicQuestions'
import { connect } from 'react-redux'
import { getTopicQuestions } from '@state/selectors'
import ProgressBarQuestions from '../ProgressBarQuestions'

function TopicQuestions ({ topic, topicQuestions }) {
  return (
    <div>
      <div>{topic}</div>
      <ul>
        {/* <StyledTopicQuestions /> */}
        {/* <ProgressBarQuestions topic={topic} /> */}
        {/* {topicQuestions} */}
      </ul>
    </div>
  )
}

function mapStateToProps (state, { topic }) {
  return {
    topicQuestions: getTopicQuestions(state, { topic })
  }
}

export default connect(mapStateToProps)(TopicQuestions)
