import React from 'react'
import PropTypes from 'prop-types'

export default function Accordion (props) {
  const { heading, content, isExpanded } = props
  const [expanded, setExpanded] = React.useState(isExpanded)
  const onClick = () => { setExpanded(!expanded) }
  let headingView = ''
  let contentView = ''

  if (heading && (typeof heading) === 'function') {
    headingView = heading(onClick)
  }

  if (content && (typeof content) === 'function' && expanded) {
    contentView = content()
  }

  return (
    <React.Fragment>
      { headingView }
      { contentView }
    </React.Fragment>
  )
}

Accordion.propTypes = {
  heading: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
}
