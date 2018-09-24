import StyledQuestionBox from '@components/styled/QuestionBox'
import { connect } from 'react-redux'
import { getActiveQuestionBody } from '@state/selectors'

function mapStateToProps (state) {
  return { children: getActiveQuestionBody(state) }
}

export default connect(mapStateToProps)(StyledQuestionBox)
