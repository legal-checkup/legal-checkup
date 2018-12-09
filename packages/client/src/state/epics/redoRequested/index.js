import { push } from 'connected-react-router'
import { ofType } from 'redux-observable'

import { mapTo } from 'rxjs/operators'

import { REDO_CHECKUP_CLICKED, CHECKUP_PATH } from '../../constants'

// Intercepts a REDO_CHECKUP_CLICKED action and pushes a new router state to redirect us to the CHECKUP_PATH
const redoRequestedEpic = action$ =>
  action$.pipe(
    ofType(REDO_CHECKUP_CLICKED),
    mapTo(push(CHECKUP_PATH))
  )

export default redoRequestedEpic
