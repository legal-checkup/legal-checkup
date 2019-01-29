import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledMap from 'styled-map'
import Accordion from '../../UIKit/Accordion'
import ResultTopicHeader from '../ResultTopicHeader'
import ResultTopicContent from '../ResultTopicContent'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const Boundary = styled.div`
  background-color: #fff;
  margin-bottom: 15px;
  padding: ${styledMap('format', {
    [DESKTOP]: '23px 24px 21px 30px',
    [TABLET]: '16px 20px 12px 20px',
    [MOBILE]: '16px 20px 12px 20px'
  })};
  width: ${styledMap('format', {
    [DESKTOP]: '920px',
    [TABLET]: '315px',
    [MOBILE]: '315px'
  })};
`

export default function ResultAccordion (props) {
  const { format, topicObj = {} } = props
  const { questions = [] } = topicObj
  const isExpanded = true

  const headingRender = (onClick) => {
    return <ResultTopicHeader format={format} name={topicObj.name} onClick={onClick} isExpanded={isExpanded} />
  }

  const contentRender = () => {
    return <ResultTopicContent format={format} questions={questions} />
  }

  return (
    <Boundary format={format}>
      <Accordion heading={headingRender} content={contentRender} isExpanded={isExpanded} />
    </Boundary>
  )
}

ResultAccordion.propTypes = {
  format: PropTypes.string.isRequired,
  topicObj: PropTypes.object.isRequired
}
