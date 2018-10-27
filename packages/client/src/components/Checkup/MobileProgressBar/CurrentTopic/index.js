import { connect } from 'react-redux'

import { getCurrentTopicName } from '../../../../state/selectors'

import Topic from './Topic'

function mapStateToProps (state) {
  return {
    children: getCurrentTopicName(state)
  }
}

export default connect(mapStateToProps)(Topic)
