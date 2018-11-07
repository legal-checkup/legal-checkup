import styled, { css } from 'styled-components'

const StyledMobileHeader = styled.header`
  width: 100%;
  margin-top: 100px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 7px #444141;
`
StyledMobileHeader.displayName = 'StyledMobileHeader'

const StyledMobileHeaderLinkContainer = styled.span`
  width: 100%;
  height: 35px;
  display: inline;
  background-color: #444141;
  margin-left: -130px;
  margin-top: 50px;
`

const StyledMobileHeaderLogo = styled.div`
  border-radius: 5px;
  background-color: #474747;
  opacity: 0.39;
  font-family: Avenir, sans-serif;
  font-size: 10px;
  margin-bottom: 8px;
  margin-top: -28px;
  margin-left: 5px;
  width: 32px;
  height: 35px;
  object-fit: contain;
  color: #ffffff;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      cursor: default;
    `};
`
StyledMobileHeaderLogo.displayName = 'StyledMobileHeaderLogo'

const StyledMobileHeaderLegal = styled.div`
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
StyledMobileHeaderLegal.displayName = 'StyledMobileHeaderLegal'

const StyledMobileHeaderLink = styled.div`
  font-family: Avenir, sans-serif;
  width: 33px;
  line-height: 2.5;
  letter-spacing: normal;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  display: inline;
  margin-right: 10px;
  margin-left: 30px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  ${props =>
    props.active &&
    css`
      cursor: default;
      color: #b62645;
      background-color: #eeedea;
      width: 100px;
      padding-left: 8px;
      padding-bottom: 15px;
      padding-top: 8px;
      padding-right: 8px;
      border-radius: 4px;
    `};
`
StyledMobileHeaderLink.displayName = 'StyledMobileHeaderLink'

export {
  StyledMobileHeader,
  StyledMobileHeaderLogo,
  StyledMobileHeaderLegal,
  StyledMobileHeaderLink,
  StyledMobileHeaderLinkContainer
}
