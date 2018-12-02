import * as React from 'react'

import { NO, NOT_SURE, YES } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'
import { btnYes, btnNo } from '../../../constants'

export default function AnswerBlock () {
  return (
    <Bar>
      <ResponseButton data-testId={btnYes} type={YES} />
      <ResponseButton data-testId={btnNo} type={NO} />
      <ResponseButton type={NOT_SURE} />
    </Bar>
  )
}
