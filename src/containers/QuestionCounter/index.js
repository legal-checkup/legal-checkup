import { getActiveQuestionIndex, getQuestionCount } from '@state/selectors'

import StyledQuestionCounter from '@components/styled/QuestionCounter'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  console.log('QCountContainer', state)
  const children = `${getActiveQuestionIndex(state) + 1}/${getQuestionCount(
    state
  )}`

  return { children }
}

export default connect(mapStateToProps)(StyledQuestionCounter)
