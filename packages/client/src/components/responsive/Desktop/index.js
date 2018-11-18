import * as React from 'react'
import Responsive from 'react-responsive'

export default function Desktop (props) {
  return <Responsive {...props} minWidth={1280} />
}
