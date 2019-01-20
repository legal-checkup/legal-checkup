import * as React from 'react'
import Accordion from '../../UIKit/Accordion'
import ResultTopicHeader from '../ResultTopicHeader'
import ResultTopicContent from '../ResultTopicContent'

export default function ResultAccordion (props) {
  const { topicObj = {} } = props
  const { questions = [] } = topicObj
  let isExpanded = true

  const headingRender = (onClick) => {
    return <ResultTopicHeader name={topicObj.name} onClick={onClick} isExpanded={isExpanded} />
  }

  const contentRender = () => {
    return <ResultTopicContent questions={questions} />
  }

  return (
    <Accordion heading={headingRender} content={contentRender} isExpanded={isExpanded} />
  )
}
