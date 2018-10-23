import { connect } from 'react-redux'

import { makeGetTopicQuestions } from '@state/selectors'
import TopicQuestions from '@components/TopicQuestions'

function makeMapStateToProps () {
  const getTopicQuestions = makeGetTopicQuestions()
  return function mapStateToProps (state, { topic }) {
    return {
      topicQuestions: getTopicQuestions(state, { topic })
    }
  }
}

export default connect(makeMapStateToProps)(TopicQuestions)
