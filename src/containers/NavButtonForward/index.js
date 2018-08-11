import { connect } from 'react-redux'

import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import StyledNavButtonForward from '../../components/styled/NavButton/Forward'
import { getActiveQuestion, getCount, nextQuestion } from '../../state'

function mapStateToProps (state) {
  return {
    unlocked: getActiveQuestion(state) < getCount(state) + 1
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
