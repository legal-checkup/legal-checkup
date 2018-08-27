import { connect } from 'react-redux'

import NoButton from '../../components/NoButton'
import { noButtonClicked } from '../../state'
// function mapStateToProps (state) {
//   return {
//     unlocked: getActiveQuestion(state) > 1
//   }
// }
function mapDispatchToProps (dispatch) {
  return {
    handleClick: console.log('handling')
  }
}

const ConnectedNoButton = connect(null, mapDispatchToProps)(NoButton)
ConnectedNoButton.displayName = 'ConnectedNoButton'
export default ConnectedNoButton
