import NotSureButton from '../../components/NotSureButton'
import { connect } from 'react-redux'
import { notSureButtonClicked } from '../../state/actions'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(notSureButtonClicked())
  }
}

const ConnectedNotSureButton = connect(null, mapDispatchToProps)(NotSureButton)
ConnectedNotSureButton.displayName = 'ConnectedNotSureButton'
export default ConnectedNotSureButton
