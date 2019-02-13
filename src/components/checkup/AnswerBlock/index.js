import * as React from 'react'

import { btnNo, btnNotSure, btnYes } from '../../../constants'
import { NO, NOT_SURE, YES } from '../../../state/constants'

import AccessKeyBar from './AccessKeyBar'
import AnswerBar from './AnswerBar'
import ResponseButton from './ResponseButton'

export default function AnswerBlock ({ format }) {
  return (
    <AnswerBar format={format}>
      <ResponseButton type={YES} data-testid={btnYes} format={format} />
      <ResponseButton type={NO} data-testid={btnNo} format={format} />
      <ResponseButton
        type={NOT_SURE}
        data-testid={btnNotSure}
        format={format}
      />
      <AccessKeyBar format={format} />
    </AnswerBar>
  )
}
