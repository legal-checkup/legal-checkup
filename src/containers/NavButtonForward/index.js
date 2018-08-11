import { connect } from 'react-redux'

import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import StyledNavButtonForward from '../../components/styled/NavButton/Forward'
import {
  getActiveQuestion,
  nextQuestion,
  getResponsesLength
} from '../../state'

function mapStateToProps (state) {
  return {
    unlocked: getActiveQuestion(state) < getResponsesLength(state) + 1
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(nextQuestion())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithOnClickIfUnlocked(StyledNavButtonForward)
)
