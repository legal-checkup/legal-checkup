import QuestionCounter from '../../components/QuestionCounter'
import { connect } from 'react-redux'
import { getQuestionCount } from '../../state/selectors'

function mapStateToProps (state) {
  return getQuestionCount(state)
}

export default connect(mapStateToProps)(QuestionCounter)
