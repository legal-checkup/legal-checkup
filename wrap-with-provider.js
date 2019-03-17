import * as React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'

import GlobalStyle from './src/styles'
import rootEpic from './src/state/epics'
import initialState from './src/state/initialState'
import createRootReducer from './src/state/reducers'

const state = {
  checkup: {
    activeQuestionIndex: 0,
    topics: [
      {
        id: '',
        name: '',
        questions: [
          {
            body: '',
            help: '',
            results: '',
            id: '',
            resource: '',
            url: ''
          }
        ]
      }
    ],
    responses: []
  }
}

export default ({ element }) => {
  const epicMiddleware = createEpicMiddleware()
  const appliedMiddleware = applyMiddleware(epicMiddleware)
  const middleware = compose(appliedMiddleware)
  const store = createStore(createRootReducer(), state, middleware)

  epicMiddleware.run(rootEpic)

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>{element}</Provider>
    </>
  )
}
