import { connect } from 'react-redux'

import CurrentTopic from '../../components/CurrentTopic'
import { getCurrentTopic } from '../../state'

function mapStateToProps (state) {
  return {
    currentTopic: getCurrentTopic(state)
  }
}

export default connect(mapStateToProps)(CurrentTopic)
