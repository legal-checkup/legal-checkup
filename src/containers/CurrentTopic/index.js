import CurrentTopic from '@components/CurrentTopic'
import { connect } from 'react-redux'
import { getCurrentTopicName } from '@state/selectors'

function mapStateToProps (state) {
  return {
    currentTopic: getCurrentTopicName(state)
  }
}

export default connect(mapStateToProps)(CurrentTopic)
