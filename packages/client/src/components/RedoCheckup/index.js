import React from 'react'
import { connect } from 'react-redux'
import { resetClicked } from '../../state/actions'
import StyledRedoCheckup from './StyleRedoCheckup'
import { Link } from 'react-router-dom'
import { CHECKUP_PATH } from '../../state/constants'

function RedoCheckup ({ handleClick }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={CHECKUP_PATH}>
      <StyledRedoCheckup onClick={handleClick}>Re-do Checkup</StyledRedoCheckup>
    </Link>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(resetClicked())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RedoCheckup)
