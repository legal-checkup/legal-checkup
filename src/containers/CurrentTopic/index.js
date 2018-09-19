import CurrentTopic from '../../components/CurrentTopic'
import { connect } from 'react-redux'
import { getCurrentTopic } from '../../state/selectors'

function mapStateToProps (state) {
  return {
    currentTopic: getCurrentTopic(state)
  }
}

export default connect(mapStateToProps)(CurrentTopic)
