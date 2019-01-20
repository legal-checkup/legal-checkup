import * as React from 'react'
import styled from 'styled-components'

const { useState } = React

const Header = styled.span`
  font-size: 15px;
  color: #b62645;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
`

export default function ResultTopicHeader ({ name = '...', onClick, isExpanded }) {
  const [expanded, setExpanded] = useState(isExpanded)

  const showText = () => {
    return expanded ? 'show less' : 'show more'
  }

  const btnClicked = () => {
    setExpanded(!expanded)
    onClick()
  }

  return (
    <div>
      <Header>{name}</Header><button onClick={btnClicked}>{showText()}</button>
    </div>
  )
}
