import * as React from 'react'

import { NO, NOT_SURE, YES } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'

export default function AnswerBlock ({ format }) {
  return (
    <Bar format={format}>
      <ResponseButton type={YES} format={format} />
      <ResponseButton type={NO} format={format} />
      <ResponseButton type={NOT_SURE} format={format} />
    </Bar>
  )
}
