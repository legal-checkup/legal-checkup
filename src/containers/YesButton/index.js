import YesButton from '../../components/YesButton'
import { connect } from 'react-redux'
import { yesButtonClicked } from '../../state/actions'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(yesButtonClicked())
  }
}

const ConnectedYesButton = connect(null, mapDispatchToProps)(YesButton)
ConnectedYesButton.displayName = 'ConnectedYesButton'
export default ConnectedYesButton
