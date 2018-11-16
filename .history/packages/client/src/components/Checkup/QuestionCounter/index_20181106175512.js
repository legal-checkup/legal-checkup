import { connect } from 'react-redux'

import {
  getActiveQuestionIndex,
  getQuestionCount
} from '../../../state/selectors'

import Counter from './Counter'

function mapStateToProps (state) {
  const children = `${getActiveQuestionIndex(state) + 1}/${getQuestionCount(
    state
  )}`

  return { children }
}

export default connect(mapStateToProps)(Counter)
