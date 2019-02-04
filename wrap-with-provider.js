import * as React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'

import initialState from './src/state/initialState'
import createRootReducer from './src/state/reducers'

const epicMiddleware = createEpicMiddleware()
const appliedMiddleware = applyMiddleware(
  epicMiddleware
)
const middleware = compose(appliedMiddleware)
const store = createStore(
  createRootReducer(),
  initialState,
  middleware
)

// epicMiddleware.run(rootEpic)

export default ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
)
