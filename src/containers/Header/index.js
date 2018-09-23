import { CHECKUP_PATH } from '@state/constants'
import LinkInternal from '../LinkInternal'
import React from 'react'

export default function Header () {
  return (
    <header>
      <h1>Legal Checkup</h1>
      <LinkInternal to={CHECKUP_PATH}>Checkup</LinkInternal>
    </header>
  )
}
