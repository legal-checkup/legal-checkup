import React from 'react'

import {
  ABOUT_PATH,
  CHECKUP_PATH,
  HELP_PATH,
  HOME_PATH
} from '../../../state/constants'

import Header from './Header'
import Link from './Link'
import LogoLink from './LogoLink'
import Nav from './Nav'
import Title from './Title'

export default function MHeader () {
  return (
    <Header>
      <LogoLink to={HOME_PATH}>LOGO</LogoLink>
      <Title>LEGAL CHECKUP</Title>
      <Nav>
        <Link to={HOME_PATH}>Home</Link>
        <Link to={CHECKUP_PATH}>Checkup</Link>
        <Link to={ABOUT_PATH}>About</Link>
        <Link to={HELP_PATH}>Help</Link>
      </Nav>
    </Header>
  )
}