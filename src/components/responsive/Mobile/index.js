import * as React from 'react'
import Responsive from 'react-responsive'
import { responsive } from '../../../constants'

export default function Mobile (props) {
  return <Responsive {...props} maxWidth={767} data-testid={responsive} />
}
