import * as React from 'react'
import Responsive from 'react-responsive'

export default function Mobile (props) {
  return <Responsive {...props} maxWidth={767} />
}
