import { connect } from 'react-redux'

import { StyledQuestionBox } from '../../components/styled'
import { getQuestionBody } from '../../state'
import { handleFalsy } from '../../utilities'

function mapStateToProps (state) {
  return handleFalsy(getQuestionBody(state), {
    children: getQuestionBody(state)
  })
}

export default connect(mapStateToProps)(StyledQuestionBox)
