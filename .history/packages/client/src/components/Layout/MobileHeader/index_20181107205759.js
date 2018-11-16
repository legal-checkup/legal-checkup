import React from 'react'

import styled from 'styled-components'

import {
  ABOUT_PATH,
  CHECKUP_PATH,
  HELP_PATH,
  HOME_PATH
} from '../../../state/constants'

import Link from './Link'
import LogoLink from './LogoLink'

const MobileHeader = styled.header`
  width: 100%;
  margin-top: 100px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 7px #444141;
`
MobileHeader.displayName = 'MobileHeader'

const MobileHeaderLinkContainer = styled.span`
  width: 100%;
  height: 35px;
  display: inline;
  background-color: #444141;
  margin-left: -130px;
  margin-top: 50px;
`
MobileHeaderLinkContainer.displayName = 'MobileHeaderLinkContainer'

const MobileHeaderLegal = styled.div`
  width: 87px;
  height: 18px;
  font-family: MuseoSansCyrl;
  font-size: 20px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: -30px;
  margin-left: 5px;
`
MobileHeaderLegal.displayName = 'MobileHeaderLegal'

export {
  MobileHeader,
  MobileHeaderLogo,
  MobileHeaderLegal,
  MobileHeaderLink,
  MobileHeaderLinkContainer
}

export default function MHeader () {
  return (
    <MobileHeader>
      <LogoLink to={HOME_PATH}>LOGO</LogoLink>
      <MobileHeaderLegal>LEGAL CHECKUP</MobileHeaderLegal>
       <MobileHeaderLinkContainer>
        <Link to={HOME_PATH}>Home</Link>
        <Link to={CHECKUP_PATH}>Checkup</Link>
        <Link to={ABOUT_PATH}>About</Link>
        <Link to={HELP_PATH}>Help</Link>
      </MobileHeaderLinkContainer>
    </MobileHeader>
  )
}