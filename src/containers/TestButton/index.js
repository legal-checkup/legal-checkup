import { connect } from 'react-redux'

import TestButton from '../../components/TestButton'
import { testCount } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(testCount())
  }
}

export default connect(undefined, mapDispatchToProps)(TestButton)
