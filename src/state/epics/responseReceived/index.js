import { ofType } from 'redux-observable'

import { map, withLatestFrom } from 'rxjs/operators'

import { checkupComplete, nextQuestionActivated } from '../../actions'
import {
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES
} from '../../constants'
import { getActiveQuestionIndex, getQuestionCount } from '../../selectors'

// When the user responds to a question, dispatch a nextQuestionActivated
// Or, if there is no next question, then send a CHECKUP_COMPLETE action
const responseReceivedEpic = (action$, state$) =>
  action$.pipe(
    ofType(
      USER_RESPONDED_WITH_NO,
      USER_RESPONDED_WITH_NOT_SURE,
      USER_RESPONDED_WITH_YES
    ),
    withLatestFrom(state$),
    map(([_ignore, { checkup }]) => {
      const activeQuestionIndex = getActiveQuestionIndex(checkup)

      return activeQuestionIndex < getQuestionCount(checkup) - 1
        ? nextQuestionActivated(activeQuestionIndex + 1)
        : checkupComplete()
    })
  )

export default responseReceivedEpic
