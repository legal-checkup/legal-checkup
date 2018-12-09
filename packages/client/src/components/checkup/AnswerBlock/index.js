import * as React from 'react'

import { NO, NOT_SURE, YES, A, B, ESC } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'
import AccessKey from './AccessKey'
import BarBottom from './BarBottom'

export default function AnswerBlock ({ format, keycode }) {
  return (
    <Bar format={format}>
      <ResponseButton type={YES} format={format} />
      <ResponseButton type={NO} format={format} />
      <ResponseButton type={NOT_SURE} format={format} />
      <BarBottom format={format}>
        <AccessKey disabled type={A} format={format} keycode={65} />
        <AccessKey disabled type={B} format={format} keycode={66} />
        <AccessKey disabled type={ESC} format={format} keycode={27} />
      </BarBottom>
    </Bar>
  )
}
