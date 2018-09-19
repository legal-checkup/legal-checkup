import 'babel-polyfill'

import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { applyMiddleware, compose, createStore } from 'redux'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Checkup from './pages/Checkup'
import Home from './pages/Home'
import { HttpLink } from 'apollo-link-http'
import { INITIAL_STATE } from './state/constants'
import { InMemoryCache } from 'apollo-cache-inmemory'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { Provider } from 'react-redux'
import React from 'react'
import TermsOfUse from './pages/TermsOfUse'
import baseStyles from './styles'
// import { createEpicMiddleware } from 'redux-observable'
import { createBrowserHistory } from 'history'
import registerServiceWorker from './registerServiceWorker'
import { render } from 'react-dom'
import rootReducer from './state/reducers/rootReducer'

import Results from './pages/Results'

const history = createBrowserHistory()
// const epicMiddleware = createEpicMiddleware()
const history = createBrowserHistory()
const appliedMiddleware = applyMiddleware(
  routerMiddleware(history) /* , epicMiddleware */
)
const devTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = devTools
  ? compose(appliedMiddleware, devTools)
  : compose(appliedMiddleware)
const store = createStore(
  connectRouter(history)(rootReducer),
  INITIAL_STATE,
  middleware
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
            <Route path='/results' component={Results} />
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
