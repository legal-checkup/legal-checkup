import { CHECKUP_COMPLETE, RESULTS_PATH } from '@state/constants'

import { mapTo } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { push } from 'connected-react-router'

// Intercepts a CHECKUP_COMPLETE action and pushes a new router state to redirect us to the RESULTS_PATH
const checkupCompleteEpic = action$ =>
  action$.pipe(
    ofType(CHECKUP_COMPLETE),
    mapTo(push(RESULTS_PATH))
  )

export default checkupCompleteEpic
