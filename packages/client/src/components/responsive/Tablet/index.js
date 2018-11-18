import * as React from 'react'
import Responsive from 'react-responsive'

export default function Tablet (props) {
  return <Responsive {...props} minWidth={768} maxWidth={1279} />
}
