import { combineEpics } from 'redux-observable'

import rerouteOnThirdTest from './rerouteOnThirdTest'

export default combineEpics(rerouteOnThirdTest)
