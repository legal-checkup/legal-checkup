import * as React from 'react'
import { Route, Switch } from 'react-router'

import About from '../../pages/About'
import CheckUp from '../../pages/CheckUp'
import Help from '../../pages/Help'
import Home from '../../pages/Home'
import PrivacyPolicy from '../../pages/PrivacyPolicy'
import Results from '../../pages/Results'
import TermsOfUse from '../../pages/TermsOfUse'
import {
  ABOUT_PATH,
  CHECKUP_PATH,
  HELP_PATH,
  HOME_PATH,
  PRIVACY_POLICY_PATH,
  RESULTS_PATH,
  TERMS_OF_USE_PATH
} from '../../state/constants'
import {
  switchId,
  switchboardHomePath,
  switchboardAboutPath,
  switchboardCheckupPath,
  switchboardHelpPath,
  switchboardPrivacyPolicyPath,
  switchboardResultsPath,
  switchboardTermsOfUsePath
} from '../../constants'

export default function Switchboard () {
  return (
    <Switch data-testid={switchId}>
      <Route exact path={HOME_PATH} component={Home} data-testid={switchboardHomePath} />
      <Route path={ABOUT_PATH} component={About} data-testid={switchboardAboutPath} />
      <Route path={CHECKUP_PATH} component={CheckUp} data-testid={switchboardCheckupPath} />
      <Route path={HELP_PATH} component={Help} data-testid={switchboardHelpPath} />
      <Route path={PRIVACY_POLICY_PATH} component={PrivacyPolicy} data-testid={switchboardPrivacyPolicyPath} />
      <Route path={RESULTS_PATH} component={Results} data-testid={switchboardResultsPath} />
      <Route path={TERMS_OF_USE_PATH} component={TermsOfUse} data-testid={switchboardTermsOfUsePath} />
    </Switch>
  )
}
