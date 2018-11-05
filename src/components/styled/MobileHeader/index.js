import styled, { css } from 'styled-components'

const StyledDesktopHeader = styled.header`
  width: 100%;
  margin-top: 100px;
  width: 375px;
  height: 100px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 7px #444141;
`
StyledDesktopHeader.displayName = 'StyledDesktopHeader'

const StyledMobileHeaderLinkContainer = styled.span`
  width: 375px;
  height: 43px;
  background-color: #444141;
  margin-left: -120px;
  margin-top: 50px;
  margin-rightt: 100px;
  // display: inline-block;
`

const StyledDesktopHeaderLogo = styled.div`
  border-radius: 5px;
  background-color: #474747;
  opacity: 0.39;
  font-family: Avenir, sans-serif;
  font-size: 10px;
  margin-bottom: 40px;
  line-height: 0.84;
  width: 32px;
  height: 32px;
  object-fit: contain;
  color: #ffffff;

  cursor: pointer;
  ${props =>
    props.active &&
    css`
      cursor: default;
    `};
`
StyledDesktopHeaderLogo.displayName = 'StyledDesktopHeaderLogo'

const StyledDesktopHeaderLegal = styled.div`
  width: 87px;
  height: 16px;
  font-family: MuseoSansCyrl;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: -30px;
`
StyledDesktopHeaderLegal.displayName = 'StyledDesktopHeaderLegal'

const StyledDesktopHeaderLink = styled.div`
  font-family: Avenir, sans-serif;
  width: 33px;
  line-height: 3;
  letter-spacing: normal;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  display: inline;
  margin-right: 10px;
  margin-left: 30px;
  padding-top: 20px;
  margin-bottom: 0px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  ${props =>
    props.active &&
    css`
      cursor: default;
      color: #b62645;
      border-bottom: 2px solid #b62645;
    `};
`
StyledDesktopHeaderLink.displayName = 'StyledDesktopHeaderLink'

export {
  StyledDesktopHeader,
  StyledDesktopHeaderLogo,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink,
  StyledMobileHeaderLinkContainer
}
