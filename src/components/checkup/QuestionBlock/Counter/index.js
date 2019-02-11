import { connect } from 'react-redux'

import {
  getActiveQuestionIndex,
  getQuestionCount
} from '../../../../state/selectors'

import Wrapper from './Wrapper'

function mapStateToProps ({ checkup }) {
  const children = `${getActiveQuestionIndex(checkup) + 1} / ${getQuestionCount(
    checkup
  )}`

  return { children }
}

export default connect(mapStateToProps)(Wrapper)
