import QuestionBox from '../../components/QuestionBox'
import { connect } from 'react-redux'
import { getCurrentQuestion } from '../../state/selectors'

function mapStateToProps (state) {
  return getCurrentQuestion(state)
}

export default connect(mapStateToProps)(QuestionBox)
