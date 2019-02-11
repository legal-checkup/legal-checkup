import { ofType } from 'redux-observable'

import { navigate } from 'gatsby'
import { mapTo } from 'rxjs/operators'

import { CHECKUP_PATH, REDO_CHECKUP_CLICKED } from '../../constants'

// Intercepts a REDO_CHECKUP_CLICKED action and pushes a new router state to redirect us to the CHECKUP_PATH
const redoRequestedEpic = action$ =>
  action$.pipe(
    ofType(REDO_CHECKUP_CLICKED),
    mapTo(navigate(CHECKUP_PATH))
  )

export default redoRequestedEpic
