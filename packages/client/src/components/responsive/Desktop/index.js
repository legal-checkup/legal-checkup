import * as React from 'react'
import Responsive from 'react-responsive'
import { responsive } from '../../../constants'

export default function Desktop (props) {
  return <Responsive {...props} minWidth={1280} data-testid={responsive} />
}
