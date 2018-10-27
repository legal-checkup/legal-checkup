import styled, { css } from 'styled-components'

const StyledDesktopHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 7px #444141;
`
StyledDesktopHeader.displayName = 'StyledDesktopHeader'

const StyledDesktopHeaderLogo = styled.div`
  border-radius: 5px;
  background-color: #474747;
  opacity: 0.39;
  font-family: Avenir, sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 0.84;
  color: #ffffff;
  padding: 17px;
  margin: 0 10px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      cursor: default;
    `};
`
StyledDesktopHeaderLogo.displayName = 'StyledDesktopHeaderLogo'

const StyledDesktopHeaderLegal = styled.div`
  width: 156px;
  font-family: Avenir, sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  color: #ffffff;
  margin-right: 150px;
`
StyledDesktopHeaderLegal.displayName = 'StyledDesktopHeaderLegal'

const StyledDesktopHeaderLegal2thChild = styled.span`
  color: #b62645;
`
StyledDesktopHeaderLegal2thChild.displayName =
  'StyledDesktopHeaderLegal2thChild'

const StyledDesktopHeaderLink = styled.div`
  font-family: Avenir, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin-right: 120px;
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
  StyledDesktopHeaderLegal2thChild,
  StyledDesktopHeaderLink
}
