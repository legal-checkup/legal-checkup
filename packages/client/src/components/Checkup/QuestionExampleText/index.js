import { connect } from 'react-redux'

import { getActiveQuestion } from '../../../state/selectors'
import StyledQuestionExampleText from './ExampleText'

function mapStateToProps ({ checkup }) {
  const { help: children } = getActiveQuestion(checkup)

  return {
    children
  }
}

export default connect(mapStateToProps)(StyledQuestionExampleText)
