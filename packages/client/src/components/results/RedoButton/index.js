import * as React from 'react'
import { connect } from 'react-redux'

import { redoCheckupClicked } from '../../../state/actions'

import Button from './Button'

function RedoCheckup ({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      Redo Checkup
    </Button>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(redoCheckupClicked())
  }
}

export default connect(null, mapDispatchToProps)(RedoCheckup)
