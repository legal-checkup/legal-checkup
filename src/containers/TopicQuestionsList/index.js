import { connect } from 'react-redux'

import { getTopics } from '@state/selectors'
import TopicQuestionsList from '@components/TopicQuestionsList'

function mapStateToProps (state) {
  return {
    topics: getTopics(state)
  }
}

export default connect(mapStateToProps)(TopicQuestionsList)
