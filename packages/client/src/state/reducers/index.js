import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import checkup from './checkup'

export default (history) => combineReducers({
  router: connectRouter(history),
  checkup
})
