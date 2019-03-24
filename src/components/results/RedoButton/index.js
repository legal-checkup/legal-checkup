import * as React from 'react'
import { connect } from 'react-redux'

import { redoCheckupClicked } from '../../../state/actions'

import Button from './Button'
import { redoBtn } from '../../../constants'
import { PageTextContainer } from '../../layout/Section'

function RedoCheckup ({ handleClick }) {
  return (
    <PageTextContainer>
      <Button onClick={handleClick} data-testid={redoBtn}>
        Re-do Checkup
      </Button>
    </PageTextContainer>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(redoCheckupClicked())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RedoCheckup)
