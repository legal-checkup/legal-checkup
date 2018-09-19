import { QuestionBox } from '../../components'
import { connect } from 'react-redux'
import { getCurrentQuestion } from '../../state'

function mapStateToProps (state) {
  return getCurrentQuestion(state)
}

export default connect(mapStateToProps)(QuestionBox)
