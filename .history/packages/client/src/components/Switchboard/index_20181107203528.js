import * as React from 'react'
import { Route, Switch } from 'react-router'

import CheckUp from '../../pages/CheckUp'
import Home from '../../pages/Home'
import PrivacyPolicy from '../../pages/PrivacyPolicy'
import Results from '../../pages/Results'
import TermsOfUse from '../../pages/TermsOfUse'
import {
  CHECKUP_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  RESULTS_PATH,
  TERMS_OF_USE_PATH
} from '../../state/constants'

export default function Switchboard () {
  return (
    <Switch>
      <Route exact path={HOME_PATH} component={Home} />
      <Route path={CHECKUP_PATH} component={CheckUp} />
      <Route path={PRIVACY_POLICY_PATH} component={PrivacyPolicy} />
      <Route path={RESULTS_PATH} component={Results} />
      <Route path={TERMS_OF_USE_PATH} component={TermsOfUse} />
    </Switch>
  )
}
