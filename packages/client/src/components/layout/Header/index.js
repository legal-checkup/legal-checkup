import * as React from 'react'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
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
        <Wrapper format={DESKTOP}>
          <LogoWrapper format={DESKTOP}>
            <LinkedLogo to={HOME_PATH} format={DESKTOP}>
              <LogoImage />
            </LinkedLogo>
            <Title format={DESKTOP} />
          </LogoWrapper>
          <Nav format={DESKTOP}>
            <Link to={HOME_PATH} format={`${DESKTOP}Header`}>Home</Link>
            <Link to={CHECKUP_PATH} format={`${DESKTOP}Header`}>Checkup</Link>
            <Link to={ABOUT_PATH} format={`${DESKTOP}Header`}>About</Link>
            <Link to={HELP_PATH} format={`${DESKTOP}Header`}>Help</Link>
          </Nav>
        </Wrapper>
      )
    case TABLET:
      return (
        <Wrapper format={TABLET}>
          <LogoWrapper format={TABLET}>
            <LinkedLogo to={HOME_PATH} format={TABLET}>
              <LogoImage />
            </LinkedLogo>
            <Title format={TABLET} />
          </LogoWrapper>
          <Nav format={TABLET}>
            <Link to={HOME_PATH} format={`${TABLET}Header`}>Home</Link>
            <Link to={CHECKUP_PATH} format={`${TABLET}Header`}>Checkup</Link>
            <Link to={ABOUT_PATH} format={`${TABLET}Header`}>About</Link>
            <Link to={HELP_PATH} format={`${TABLET}Header`}>Help</Link>
          </Nav>
        </Wrapper>
      )
    default:
      return (
        <Wrapper format={MOBILE}>
          <LogoWrapper format={MOBILE}>
            <LinkedLogo to={HOME_PATH} format={MOBILE}>
              <LogoImage />
            </LinkedLogo>
            <Title format={MOBILE} />
          </LogoWrapper>
          <Nav format={MOBILE}>
            <Link to={HOME_PATH} format={`${MOBILE}Header`}>Home</Link>
            <Link to={CHECKUP_PATH} format={`${MOBILE}Header`}>Checkup</Link>
            <Link to={ABOUT_PATH} format={`${MOBILE}Header`}>About</Link>
            <Link to={HELP_PATH} format={`${MOBILE}Header`}>Help</Link>
          </Nav>
        </Wrapper>
      )
  }
}
