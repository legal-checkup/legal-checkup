import * as React from 'react'
// import { connect } from 'react-redux'
import Accordion from '../../UIKit/Accordion'

export default function ResultAccordion (props) {
  return (
    <Accordion heading={headingRender} content={contentRender} isExpanded />
  )
}

function headingRender (onClick) {
  return (
    <div>
      <span>Topic Name</span><button onClick={onClick}>show less/more</button>
    </div>
  )
}

function contentRender () {
  return (
    <div>
      <h1>Content Header</h1>
      <p>All the tiny description related to the header</p>
    </div>
  )
}
