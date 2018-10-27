import '@babel/polyfill'

import * as React from 'react'
import { Fragment } from 'react'
import { render } from 'react-dom'

import SiteWrapper from './components/SiteWrapper'
import { unregister } from './serviceWorker'
import GlobalStyle from './styles'

render(
  <Fragment>
    <SiteWrapper />
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root')
)

unregister()
