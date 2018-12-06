import * as React from 'react'
import { DESKTOP, MOBILE, TABLET, headerWrapper, headerLinkedLogo, headerTitle, headerHome, headerNav, headerCheckup, headerAbout, headerHelp } from '../../../constants'
import { ABOUT_PATH, CHECKUP_PATH, HELP_PATH, HOME_PATH } from '../../../state/constants'
import Link from '../../Link'

import LinkedLogo from './LinkedLogo'
import Nav from './Nav'
import Title from './Title'
import Wrapper from './Wrapper'

export default function Header (props) {
  const { format } = props

  switch (format) {
    case DESKTOP:
      return (
        <Wrapper data-testid={headerWrapper}>
          <LinkedLogo format={DESKTOP} data-testid={headerLinkedLogo} />
          <Title format={DESKTOP} data-testid={headerTitle} />
          <Nav format={DESKTOP} data-testid={headerNav}>
            <Link to={HOME_PATH} format={`${DESKTOP}Header`} data-testid={headerHome}>Home</Link>
            <Link to={CHECKUP_PATH} format={`${DESKTOP}Header`} data-testid={headerCheckup}>Checkup</Link>
            <Link to={ABOUT_PATH} format={`${DESKTOP}Header`} data-testid={headerAbout}>About</Link>
            <Link to={HELP_PATH} format={`${DESKTOP}Header`} data-testid={headerHelp}>Help</Link>
          </Nav>
        </Wrapper>
      )
    case TABLET:
      return (
        <Wrapper data-testid={headerWrapper}>
          <LinkedLogo format={TABLET} data-testid={headerLinkedLogo} />
          <Title format={TABLET} data-testid={headerTitle} />
          <Nav format={TABLET} data-testid={headerNav}>
            <Link to={HOME_PATH} format={`${TABLET}Header`} data-testid={headerHome}>Home</Link>
            <Link to={CHECKUP_PATH} format={`${TABLET}Header`} data-testid={headerCheckup}>Checkup</Link>
            <Link to={ABOUT_PATH} format={`${TABLET}Header`} data-testid={headerAbout}>About</Link>
            <Link to={HELP_PATH} format={`${TABLET}Header`} data-testid={headerHelp}>Help</Link>
          </Nav>
        </Wrapper>
      )
    default:
      return (
        <Wrapper data-testid={headerWrapper}>
          <LinkedLogo format={MOBILE} data-testid={headerLinkedLogo} />
          <Title format={MOBILE} data-testid={headerTitle} />
          <Nav format={MOBILE} data-testid={headerNav}>
            <Link to={HOME_PATH} format={`${MOBILE}Header`} data-testid={headerHome}>Home</Link>
            <Link to={CHECKUP_PATH} format={`${MOBILE}Header`} data-testid={headerCheckup}>Checkup</Link>
            <Link to={ABOUT_PATH} format={`${MOBILE}Header`} data-testid={headerAbout}>About</Link>
            <Link to={HELP_PATH} format={`${MOBILE}Header`} data-testid={headerHelp}>Help</Link>
          </Nav>
        </Wrapper>
      )
  }
}
