import React from 'react'
import styled from 'styled-components'

const StyledNavButton = styled.button`
  color: #ff0000;
  font-size: 16px;
  margin: 4px 10px;
`

StyledNavButton.defaultName = 'StyledNavButton'

export default function Header () {
  return (
    <header>
      <h1>Header</h1>
      <h2>hello world!</h2>
      <StyledNavButton>page1</StyledNavButton>
      <StyledNavButton>page2</StyledNavButton>
      <StyledNavButton>page3</StyledNavButton>
    </header>
  )
}
