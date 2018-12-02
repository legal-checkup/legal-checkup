import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Accordion (props) {
  const { heading, content, isExpanded } = props
  const [expanded, setExpanded] = useState(isExpanded)
  const onClick = () => { setExpanded(!expanded) }

  return (
    <div>
      { heading(onClick) }
      { expanded && content() }
    </div>
  )
}

Accordion.propTypes = {
  heading: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
}
