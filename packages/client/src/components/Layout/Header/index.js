import React from 'react'

import { CHECKUP_PATH, HOME_PATH } from '../../../state/constants'
import Link from '../../Link'

export default function Header () {
  return (
    <header>
      <Link to={HOME_PATH}>
        <h1>Legal Checkup</h1>
      </Link>
      <Link to={CHECKUP_PATH}>Checkup</Link>
    </header>
  )
}
