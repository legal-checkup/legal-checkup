import { connect } from 'react-redux'
import { FOR_EXAMPLE } from '../../../../constants'

import { getActiveQuestion } from '../../../../state/selectors'

import Wrapper from './Wrapper'

function mapStateToProps ({ checkup }) {
  const { help: children } = getActiveQuestion(checkup)

  return children
    ? {
      children: `${FOR_EXAMPLE}${children}`
    }
    : children
}

export default connect(mapStateToProps)(Wrapper)
