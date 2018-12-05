import * as React from 'react'

import { NO, NOT_SURE, YES, A, B, esc } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'
import AccessKey from './AccessKey'
import BarBottom from './BarBottom'

export default function AnswerBlock ({ format }) {
  return (
    <Bar format={format}>
      <ResponseButton type={YES} format={format} />
      <ResponseButton type={NO} format={format} />
      <ResponseButton type={NOT_SURE} format={format} />
      <BarBottom format={format}>
        <AccessKey type={A} format={format} />
        <AccessKey type={B} format={format} />
        <AccessKey type={esc} format={format} />
      </BarBottom>
    </Bar>
  )
}
