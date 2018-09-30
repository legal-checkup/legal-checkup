import styled, { css } from 'styled-components'

const StyledDesktopHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
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
`
StyledDesktopHeaderLogo.displayName = 'StyledDesktopHeaderLogo'

const StyledDesktopHeaderLegal = styled.div`
  width: 156px;
  font-family: Avenir, sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 0.84;
  color: #8f8f8f;
  margin-right: 150px;
`
StyledDesktopHeaderLegal.displayName = 'StyledDesktopHeaderLegal'

const StyledDesktopHeaderLink = styled.div`
  opacity: 0.53;
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
      opacity: 1;
      border-bottom: 2px solid #fff;
    `};
`
StyledDesktopHeaderLink.displayName = 'StyledDesktopHeaderLink'

export {
  StyledDesktopHeader,
  StyledDesktopHeaderLogo,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink
}
