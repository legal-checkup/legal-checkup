import * as React from 'react'

import { NO, NOT_SURE, YES, A, B, ESC } from '../../../state/constants'

import Bar from './Bar'
import ResponseButton from './ResponseButton'
import AccessKey from './AccessKey'
import BarBottom from './BarBottom'
import { btnYes, btnNo, btnNotSure } from '../../../constants'

export default function AnswerBlock ({ format, keycode }) {
  return (
    <Bar format={format}>
      <ResponseButton
        type={YES}
        data-testid={btnYes}
        format={format}
        className='YESBUTTON'
      />
      <ResponseButton
        type={NO}
        data-testid={btnNo}
        format={format}
        className='NOBUTTON'
      />
      <ResponseButton
        type={NOT_SURE}
        data-testid={btnNotSure}
        format={format}
        className='NOTSUREBUTTON'
      />
      <BarBottom format={format}>
        <AccessKey type={A} format={format} keycode={65} />
        <AccessKey type={B} format={format} keycode={66} />
        <AccessKey type={ESC} format={format} keycode={27} />
      </BarBottom>
    </Bar>
  )
}
