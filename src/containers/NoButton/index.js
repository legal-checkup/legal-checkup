import { connect } from 'react-redux'
import NoButton from '../../components/NoButton'
import { noButtonClicked } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(noButtonClicked())
  }
}

const ConnectedNoButton = connect(null, mapDispatchToProps)(NoButton)
ConnectedNoButton.displayName = 'ConnectedNoButton'
export default ConnectedNoButton
