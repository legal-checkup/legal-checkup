import { ofType } from 'redux-observable'
import { delay, filter, map, withLatestFrom } from 'rxjs/operators'
import { push } from 'connected-react-router'

import { TEST_COUNT } from '../../constants'

export default function rerouteOnThirdTest (action$, state$) {
  return action$.pipe(
    ofType(TEST_COUNT),
    withLatestFrom(state$),
    filter(([, state]) => state.count > 2),
    delay(1500),
    map(() => push('/checkup'))
  )
}
