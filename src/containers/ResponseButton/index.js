import { NO, YES } from '@state/constants'
import {
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '@state/actions'

import ResponseButton from '@components/ResponseButton'
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
    handleClick: () => dispatch(getAction(type))
  }
}

export default connect(null, mapDispatchToProps)(ResponseButton)
