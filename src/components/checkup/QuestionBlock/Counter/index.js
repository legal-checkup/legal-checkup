import { connect } from 'react-redux'

import {
  getActiveQuestionIndex,
  getQuestionCount
} from '../../../../state/selectors'

import StyledCounter from './style'

function mapStateToProps ({ checkup }) {
  const children = `${getActiveQuestionIndex(checkup) + 1} / ${getQuestionCount(
    checkup
  )}`

  return { children }
}

export default connect(mapStateToProps)(StyledCounter)
