import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
// import { createEpicMiddleware } from 'redux-observable'
import { createBrowserHistory } from 'history'
import { Route, Switch } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import baseStyles from './styles'
import { INITIAL_STATE /*, rootEpic */ } from './state'
import { rootReducer } from './state/reducers'
import registerServiceWorker from './registerServiceWorker'

import { Checkup, Home, PrivacyPolicy, TermsOfUse } from './pages'

const history = createBrowserHistory()
// const epicMiddleware = createEpicMiddleware()
const store = createStore(
  connectRouter(history)(rootReducer),
  INITIAL_STATE,
  compose(
    applyMiddleware(routerMiddleware(history) /* , epicMiddleware */),
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// epicMiddleware.run(rootEpic)

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function renderApp () {
  baseStyles()

  render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/checkup' component={Checkup} />
            <Route path='/privacy-policy' component={PrivacyPolicy} />
            <Route path='/terms-of-use' component={TermsOfUse} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

renderApp()
registerServiceWorker()
