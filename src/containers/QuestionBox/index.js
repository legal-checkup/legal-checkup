import { connect } from 'react-redux'

import { QuestionBox } from '../../components'
import { getQuestionBody } from '../../state'

function mapStateToProps (state) {
  return getQuestionBody(state)
}

export default connect(mapStateToProps)(QuestionBox)
