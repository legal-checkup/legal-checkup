import {
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES
} from '../../constants'
import { checkupComplete, nextQuestionActivated } from '../../actions'
import { getActiveQuestionIndex, getQuestionCount } from '../../selectors'
import { map, withLatestFrom } from 'rxjs/operators'

import { ofType } from 'redux-observable'

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
    map(([_, state]) => {
      const activeQuestionIndex = getActiveQuestionIndex(state)

      return activeQuestionIndex < getQuestionCount(state) - 1
        ? nextQuestionActivated(activeQuestionIndex + 1)
        : checkupComplete()
    })
  )

export default responseReceivedEpic
