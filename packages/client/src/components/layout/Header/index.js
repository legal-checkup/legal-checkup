import * as React from 'react'
import {
  DESKTOP,
  MOBILE,
  TABLET,
  headerWrapper,
  headerLinkedLogo,
  headerTitle,
  headerHome,
  headerNav,
  headerCheckup,
  headerAbout,
  headerHelp
} from '../../../constants'
import {
  ABOUT_PATH,
  CHECKUP_PATH,
  HELP_PATH,
  HOME_PATH
} from '../../../state/constants'
import Link from '../../Link'

import LinkedLogo from './LinkedLogo'
import LogoImage from './LinkedLogo/LogoImage'
import LogoWrapper from './LogoWrapper'
import Nav from './Nav'
import Title from './Title'
import Wrapper from './Wrapper'

export default function Header ({ format }) {
  switch (format) {
    case DESKTOP:
      return (
        <Wrapper format={DESKTOP} data-testid={headerWrapper}>
          <LogoWrapper format={DESKTOP}>
            <LinkedLogo
              to={HOME_PATH}
              format={DESKTOP}
              data-testid={headerLinkedLogo}
            >
              <LogoImage />
            </LinkedLogo>
            <Title format={DESKTOP} data-testid={headerTitle} />
          </LogoWrapper>
          <Nav format={DESKTOP} data-testid={headerNav}>
            <Link
              to={HOME_PATH}
              format={`${DESKTOP}Header`}
              data-testid={headerHome}
            >
              Home
            </Link>
            <Link
              to={CHECKUP_PATH}
              format={`${DESKTOP}Header`}
              data-testid={headerCheckup}
            >
              Checkup
            </Link>
            <Link
              to={ABOUT_PATH}
              format={`${DESKTOP}Header`}
              data-testid={headerAbout}
            >
              About
            </Link>
            <Link
              to={HELP_PATH}
              format={`${DESKTOP}Header`}
              data-testid={headerHelp}
            >
              Help
            </Link>
          </Nav>
        </Wrapper>
      )
    case TABLET:
      return (
        <Wrapper format={TABLET} data-testid={headerWrapper}>
          <LogoWrapper format={TABLET}>
            <LinkedLogo
              to={HOME_PATH}
              format={TABLET}
              data-testid={headerLinkedLogo}
            >
              <LogoImage />
            </LinkedLogo>
            <Title format={TABLET} data-testid={headerTitle} />
          </LogoWrapper>
          <Nav format={TABLET} data-testid={headerNav}>
            <Link
              to={HOME_PATH}
              format={`${TABLET}Header`}
              data-testid={headerHome}
            >
              Home
            </Link>
            <Link
              to={CHECKUP_PATH}
              format={`${TABLET}Header`}
              data-testid={headerCheckup}
            >
              Checkup
            </Link>
            <Link
              to={ABOUT_PATH}
              format={`${TABLET}Header`}
              data-testid={headerAbout}
            >
              About
            </Link>
            <Link
              to={HELP_PATH}
              format={`${TABLET}Header`}
              data-testid={headerHelp}
            >
              Help
            </Link>
          </Nav>
        </Wrapper>
      )
    default:
      return (
        <Wrapper format={MOBILE} data-testid={headerWrapper}>
          <LogoWrapper format={MOBILE}>
            <LinkedLogo
              to={HOME_PATH}
              format={MOBILE}
              data-testid={headerLinkedLogo}
            >
              <LogoImage />
            </LinkedLogo>
            <Title format={MOBILE} data-testid={headerTitle} />
          </LogoWrapper>
          <Nav format={MOBILE} data-testid={headerNav}>
            <Link
              to={HOME_PATH}
              format={`${MOBILE}Header`}
              data-testid={headerHome}
            >
              Home
            </Link>
            <Link
              to={CHECKUP_PATH}
              format={`${MOBILE}Header`}
              data-testid={headerCheckup}
            >
              Checkup
            </Link>
            <Link
              to={ABOUT_PATH}
              format={`${MOBILE}Header`}
              data-testid={headerAbout}
            >
              About
            </Link>
            <Link
              to={HELP_PATH}
              format={`${MOBILE}Header`}
              data-testid={headerHelp}
            >
              Help
            </Link>
          </Nav>
        </Wrapper>
      )
  }
}
