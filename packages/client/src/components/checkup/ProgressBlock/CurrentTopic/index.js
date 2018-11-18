import { connect } from 'react-redux'

import { getCurrentTopicName } from '../../../../state/selectors'

import Topic from './Topic'

function mapStateToProps ({ checkup }) {
  return {
    children: getCurrentTopicName(checkup)
  }
}

export default connect(mapStateToProps)(Topic)
