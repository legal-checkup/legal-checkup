import { connect } from 'react-redux'

import {
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '../../../../state/actions'
import { B, A } from '../../../../state/constants'

import Key from './Key'

function getAction (type) {
  switch (type) {
    case B:
      return userRespondedWithNo()
    case A:
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

export default connect(
  null,
  mapDispatchToProps
)(Key)
