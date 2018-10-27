import { connect } from 'react-redux'

import { getTopics } from '@state/selectors'
import DesktopProgressBar from '@components/DesktopProgressBar'

function mapStateToProps (state) {
  return {
    topics: getTopics(state)
  }
}

export default connect(mapStateToProps)(DesktopProgressBar)
