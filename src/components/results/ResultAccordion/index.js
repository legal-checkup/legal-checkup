import * as React from 'react'
import { filter } from 'ramda'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledMap from 'styled-map'
import Accordion from '../../UIKit/Accordion'
import ResultTopicHeader from '../ResultTopicHeader'
import ResultTopicContent from '../ResultTopicContent'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import { NO } from '../../../state/constants'

const Boundary = styled.div`
  background-color: #fff;
  margin: 15px auto;
  padding: ${styledMap('format', {
    [DESKTOP]: '23px 24px 21px 30px',
    [TABLET]: '16px 20px 12px 20px',
    [MOBILE]: '16px 20px 12px 20px'
  })};
  width: ${styledMap('format', {
    [DESKTOP]: '866px',
    [TABLET]: '275px',
    [MOBILE]: '275px'
  })};
`

export default function ResultAccordion (props) {
  const { format, topicName = {}, topicArray } = props
  const { questions = [] } = topicName

  const isExpanded = () => {
    if (topicArray.length > 2) {
      return false
    } else {
      return true
    }
  }
  const headingRender = onClick => {
    return (
      <ResultTopicHeader
        format={format}
        name={topicName.name}
        onClick={onClick}
        isExpanded={isExpanded}
      />
    )
  }

  const contentRender = () => {
    const showContent = question => question.answer !== NO
    const filteredQuestion = filter(showContent, questions)
    return <ResultTopicContent format={format} questions={filteredQuestion} />
  }
  return (
    <Boundary format={format}>
      <Accordion
        heading={headingRender}
        content={contentRender}
        isExpanded={isExpanded}
      />
    </Boundary>
  )
}

ResultAccordion.propTypes = {
  format: PropTypes.string.isRequired,
  topicName: PropTypes.object.isRequired,
  topicArray: PropTypes.array.isRequired
}
