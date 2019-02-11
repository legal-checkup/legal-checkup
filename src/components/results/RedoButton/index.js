import * as React from 'react'
import { connect } from 'react-redux'

import { redoCheckupClicked } from '../../../state/actions'

import Button from './Button'
import { redoBtn } from '../../../constants'

function RedoCheckup ({ handleClick }) {
  return (
    <Button onClick={handleClick} data-testid={redoBtn}>
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
