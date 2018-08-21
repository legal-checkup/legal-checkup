import styled from 'styled-components'

const StyledDesktopHeader = styled.div`
  width: 1440px;
  height: 100px;
  background-color: #202020;
`
StyledDesktopHeader.displayName = 'StyledDesktopHeader'

const StyledDesktopHeaderLogo = styled.div`
  width: 128px;
  height: 60px;
  border-radius: 5px;
  background-color: #474747;
  opacity: 0.39;
  font-family: Avenir;
  font-size: 32px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.84;
  letter-spacing: normal;
  color: #ffffff;
`
StyledDesktopHeaderLogo.displayName = 'StyledDesktopHeaderLogo'

const StyledDesktopHeaderLegal = styled.div`
  width: 156px;
  height: 54px;
  font-family: Avenir;
  font-size: 32px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.84;
  letter-spacing: normal;
  color: #8f8f8f;
`
StyledDesktopHeaderLegal.displayName = 'StyledDesktopHeaderLegal'

const StyledDesktopHeaderLink = styled.div`
  width: 55px;
  height: 27px;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
StyledDesktopHeaderLink.displayName = 'StyledDesktopHeaderLink'

const StyledDesktopHeaderLinkActive = styled.div`
  width: 80px;
  height: 27px;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
StyledDesktopHeaderLinkActive.displayName = 'StyledDesktopHeaderLinkActive'

export {
  StyledDesktopHeader,
  StyledDesktopHeaderLogo,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink,
  StyledDesktopHeaderLinkActive
}
