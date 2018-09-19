import NoButton from '../../components/NoButton'
import { connect } from 'react-redux'
import { noButtonClicked } from '../../state/actions'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(noButtonClicked())
  }
}

const ConnectedNoButton = connect(null, mapDispatchToProps)(NoButton)
ConnectedNoButton.displayName = 'ConnectedNoButton'
export default ConnectedNoButton
