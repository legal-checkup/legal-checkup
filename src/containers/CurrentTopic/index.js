import StyledCurrentTopic from '@components/styled/CurrentTopic'
import { connect } from 'react-redux'
import { getCurrentTopicName } from '@state/selectors'

function mapStateToProps (state) {
  return {
    children: getCurrentTopicName(state)
  }
}

export default connect(mapStateToProps)(StyledCurrentTopic)
