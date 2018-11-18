import * as React from 'react'

import { NO, NOT_SURE, YES } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'

export default function AnswerBlock () {
  return (
    <Bar>
      <ResponseButton type={YES} />
      <ResponseButton type={NO} />
      <ResponseButton type={NOT_SURE} />
    </Bar>
  )
}
