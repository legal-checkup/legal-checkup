import { connect } from 'react-redux'

import { QuestionCounter } from '../../components'
import { getQuestionCount } from '../../state'

function mapStateToProps (state) {
  return getQuestionCount(state)
}

export default connect(mapStateToProps)(QuestionCounter)
