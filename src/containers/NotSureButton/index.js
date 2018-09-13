import { connect } from 'react-redux'
import NotSureButton from '../../components/NotSureButton'
import { notSureButtonClicked } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(notSureButtonClicked())
  }
}

const ConnectedNotSureButton = connect(null, mapDispatchToProps)(NotSureButton)
ConnectedNotSureButton.displayName = 'ConnectedNotSureButton'
export default ConnectedNotSureButton
