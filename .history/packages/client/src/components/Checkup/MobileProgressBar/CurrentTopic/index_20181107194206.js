import { connect } from 'react-redux'

import { getCurrentTopicName } from '../../../../state/selectors'

import Topic from './Topic'

function mapStateToProps (state) {
  console.log('mapStateToProps', state)
  return {
    children: getCurrentTopicName(state)
  }
}

export default connect(mapStateToProps)(Topic)
