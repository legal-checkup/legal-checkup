import React from 'react'
import { connect } from 'react-redux'
import { resetClicked } from '../../state/actions'
import { DesktopStyledRedoCheckup } from '../RedoCheckup/StyleRedoCheckup'
import { Link } from 'react-router-dom'
import { CHECKUP_PATH } from '../../state/constants'

function DesktopRedoCheckup ({ handleClick }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={CHECKUP_PATH}>
      <DesktopStyledRedoCheckup onClick={handleClick}>
        Re-do Checkup
      </DesktopStyledRedoCheckup>
    </Link>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(resetClicked())
  }
}

export default connect(null, mapDispatchToProps)(DesktopRedoCheckup)
