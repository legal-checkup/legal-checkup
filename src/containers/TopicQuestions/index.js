import { connect } from 'react-redux'

import { makeGetTopicQuestions, getCurrentTopicName } from '@state/selectors'
import TopicQuestions from '@components/TopicQuestions'

function makeMapStateToProps () {
  const getTopicQuestions = makeGetTopicQuestions()

  return function mapStateToProps (state, { topic }) {
    return {
      topicQuestions: getTopicQuestions(state, { topic }),
      activeTopic: getCurrentTopicName(state) === topic
    }
  }
}

export default connect(makeMapStateToProps)(TopicQuestions)
