import { connect } from 'react-redux'

import {
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '../../../../state/actions'

import { getActiveQuestionAnswer } from '../../../../state/selectors'
import { NO, YES } from '../../../../state/constants'

import Button from './Button'

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

function mapStateToProps ({ checkup }) {
  const activeQAnswer = getActiveQuestionAnswer(checkup)
  return {
    active: activeQAnswer
  }
}

function mapDispatchToProps (dispatch, { type }) {
  return {
    onClick: () => dispatch(getAction(type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
