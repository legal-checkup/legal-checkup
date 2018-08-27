import { connect } from 'react-redux'

import YesButton from '../../components/YesButton'
import { yesButtonClicked } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(yesButtonClicked())
  }
}

const ConnectedYesButton = connect(null, mapDispatchToProps)(YesButton)
ConnectedYesButton.displayName = 'ConnectedYesButton'
export default ConnectedYesButton
