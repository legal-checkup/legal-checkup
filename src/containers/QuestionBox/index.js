import QuestionBox from '@components/QuestionBox'
import { connect } from 'react-redux'
import { getActiveQuestion } from '@state/selectors'

function mapStateToProps (state) {
  return getActiveQuestion(state)
}

export default connect(mapStateToProps)(QuestionBox)
