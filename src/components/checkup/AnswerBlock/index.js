import * as React from 'react'

import { NO, NOT_SURE, YES } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'
import { btnYes, btnNo, btnNotSure } from '../../../constants'

export default function AnswerBlock () {
  return (
    <Bar>
      <ResponseButton type={YES} data-testid={btnYes} />
      <ResponseButton type={NO} data-testid={btnNo} />
      <ResponseButton type={NOT_SURE} data-testid={btnNotSure} />
    </Bar>
  )
}
