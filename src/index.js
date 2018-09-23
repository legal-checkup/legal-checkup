import 'babel-polyfill'

import {
  CHECKUP_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  RESULTS_PATH,
  TERMS_OF_USE_PATH
} from '@state/constants'
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { applyMiddleware, compose, createStore } from 'redux'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Checkup from '@pages/Checkup'
import Home from '@pages/Home'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import PrivacyPolicy from '@pages/PrivacyPolicy'
import { Provider } from 'react-redux'
import React from 'react'
import Results from '@pages/Results'
import TermsOfUse from '@pages/TermsOfUse'
import baseStyles from './styles'
import { createBrowserHistory } from 'history'
import { createEpicMiddleware } from 'redux-observable'
import initialState from '@state/initialState'
import registerServiceWorker from './registerServiceWorker'
import { render } from 'react-dom'
import rootEpic from '@state/epics'
import rootReducer from '@state/reducers/rootReducer'

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
  ? compose(appliedMiddleware, devTools)
  : compose(appliedMiddleware)
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  middleware
)

epicMiddleware.run(rootEpic)

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
            <Route exact path={HOME_PATH} component={Home} />
            <Route path={CHECKUP_PATH} component={Checkup} />
            <Route path={PRIVACY_POLICY_PATH} component={PrivacyPolicy} />
            <Route path={RESULTS_PATH} component={Results} />
            <Route path={TERMS_OF_USE_PATH} component={TermsOfUse} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

renderApp()
registerServiceWorker()
