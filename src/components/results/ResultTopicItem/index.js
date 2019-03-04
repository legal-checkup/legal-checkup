import * as React from 'react'
import styled from 'styled-components'
import styledMap from 'styled-map'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const Anchor = styled.a`
  font-family: 'Museo Sans Cyrl 500 italic', sans-serif;
  font-size: ${styledMap('format', {
    [DESKTOP]: '18px',
    [TABLET]: '15px',
    [MOBILE]: '15px'
  })};
  font-style: italic;
  color: #4190e2;
  font-weight: 500;
`

const Comment = styled.div`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-size: ${styledMap('format', {
    [DESKTOP]: '18px',
    [TABLET]: '15px',
    [MOBILE]: '15px'
  })};
  font-weight: 500;
`

const Boundary = styled.div`
  margin: 1rem 0;
`

export default function ResultTopicItem ({ description, format, link }) {
  return (
    <Boundary>
      <Comment format={format}>{description}...</Comment>
      <Anchor format={format} href={link}>What does the law say about this</Anchor>
    </Boundary>
  )
}
