import * as React from 'react'
import styled from 'styled-components'

const Header = styled.span`
  font-size: 15px;
  color: '#b62645';
  font-family: 'Museo Sans Cyrl 900', sans-serif;
`

export default function ResultTopicHeader ({ name = '...', onClick }) {
  return (
    <div>
      <Header>{name}</Header><button onClick={onClick}>show less/more</button>
    </div>
  )
}
