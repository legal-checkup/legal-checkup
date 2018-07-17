import React from 'react'
import styled from 'styled-components'

const StyledNavButton = styled.button`
  color: red;
  font-size: 16px;
  border: none;
  padding: 4px 10px;
  background-color: pink;
  margin: 2px;
`
StyledNavButton.defaultName = 'StyledNavButton'

const StyledHeader = styled.div`
  display: flex;
  fex-direction: horizontal;
  justify-content: space-between;
  background-color: purple;
  padding: 10px;
`
StyledHeader.defaultName = 'StyledHeader'

export default function Header () {
  return (
    <header>
      <StyledHeader>
        <StyledNavButton>Home</StyledNavButton>
        <div>
          <StyledNavButton>page1</StyledNavButton>
          <StyledNavButton>page2</StyledNavButton>
          <StyledNavButton>page3</StyledNavButton>
        </div>
      </StyledHeader>
    </header>
  )
}

// function getListOfLinks() {
//   return [
//     {label: "page1",
//      link: "#"},
//     {},
//     {},
//   ]
// }
