import * as React from 'react'
import {
  ConnectedRouter,
  routerMiddleware
} from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { ApolloProvider } from 'react-apollo'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { createBrowserHistory } from 'history'

import rootEpic from '../../state/epics'
import initialState from '../../state/initialState'
import createRootReducer from '../../state/reducers'
import Switchboard from '../Switchboard'

const epicMiddleware = createEpicMiddleware()
const history = createBrowserHistory()
const appliedMiddleware = applyMiddleware(
  epicMiddleware,
  routerMiddleware(history)
)
const devTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = devTools
  ? compose(
    appliedMiddleware,
    devTools
  )
  : compose(appliedMiddleware)
const store = createStore(
  createRootReducer(history),
  initialState,
  middleware
)

epicMiddleware.run(rootEpic)

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default function SiteWrapper () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider client={client}>
          <Switchboard />
        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  )
}
