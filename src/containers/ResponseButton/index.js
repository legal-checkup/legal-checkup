import { NO, YES } from '@state/constants'
import {
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '@state/actions'

import StyledResponseButton from '@components/styled/ResponseButton'
import { connect } from 'react-redux'

function getAction (type) {
  switch (type) {
    case NO:
      return userRespondedWithNo()
    case YES:
      return userRespondedWithYes()
    default:
      return userRespondedWithNotSure()
  }
}

function mapDispatchToProps (dispatch, { type }) {
  return {
    onClick: () => dispatch(getAction(type))
  }
}

export default connect(null, mapDispatchToProps)(StyledResponseButton)
