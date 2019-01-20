import * as React from 'react'
import styled from 'styled-components'

const Anchor = styled.a`
  font-family: 'Museo Sans Cyrl 500 italic', sans-serif;
  font-size: 15px;
  font-style: italic;
  color: #4190e2;
  font-weight: 500;
`

const Comment = styled.div`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-size: 15px;
  font-weight: 500;
`

const Boundary = styled.div`
  margin: 1rem 0;
`

export default function ResultTopicItem ({ description, link }) {
  return (
    <Boundary>
      <Comment>{description}...</Comment>
      <Anchor href={link}>What does the law say about this</Anchor>
    </Boundary>
  )
}
