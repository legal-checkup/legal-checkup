import * as React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'

import GlobalStyle from './src/styles'
import rootEpic from './src/state/epics'
import initialState from './src/state/initialState'
import createRootReducer from './src/state/reducers'

const loadDevTools = () =>
  process.env.NODE_ENV === 'development' && window.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

export default ({ element }) => {
  const epicMiddleware = createEpicMiddleware()
  const appliedMiddleware = applyMiddleware(epicMiddleware)
  const middleware = compose(appliedMiddleware, loadDevTools())
  const store = createStore(createRootReducer(), initialState, middleware)

  epicMiddleware.run(rootEpic)

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>{element}</Provider>
    </>
  )
}
