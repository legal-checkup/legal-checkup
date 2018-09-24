import { CHECKUP_PATH, HOME_PATH } from '@state/constants'

import LinkInternal from '../LinkInternal'
import React from 'react'

export default function Header () {
  return (
    <header>
      <LinkInternal to={HOME_PATH}>
        <h1>Legal Checkup</h1>
      </LinkInternal>
      <LinkInternal to={CHECKUP_PATH}>Checkup</LinkInternal>
    </header>
  )
}
