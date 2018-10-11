import StyledQuestionBox from '@components/styled/QuestionBox'
import { connect } from 'react-redux'
import { getActiveQuestion } from '@state/selectors'

function mapStateToProps (state) {
  const { body: children } = getActiveQuestion(state)

  return { children }
}

export default connect(mapStateToProps)(StyledQuestionBox)
