import { connect } from 'react-redux'

import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import StyledNavButtonBack from '../../components/styled/NavButton/Back'
import { getActiveQuestion, previousQuestion } from '../../state'

function mapStateToProps (state) {
  return {
    unlocked: getActiveQuestion(state) > 1
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(previousQuestion())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  WithOnClickIfUnlocked(StyledNavButtonBack)
)
