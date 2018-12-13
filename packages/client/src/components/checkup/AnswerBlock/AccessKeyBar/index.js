import * as React from 'react'
import { connect } from 'react-redux'

import { MOBILE, accessKeyA, accessKeyB, accessKeyBar, accessKeyEsc } from '../../../../constants'
import {
  userRespondedWithNo,
  userRespondedWithNotSure,
  userRespondedWithYes
} from '../../../../state/actions'
import { KEYS, KEY_CODES } from '../../../../state/constants'

import Bar from './Bar'
import Label from './Label'

const { useEffect } = React

function AccessKeyBar ({ format, onKeyDown }) {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return format === MOBILE
    ? null
    : <Bar data-testid={accessKeyBar} format={format}>
      <Label data-testid={accessKeyA} type={KEYS.A} format={format} />
      <Label data-testid={accessKeyB} type={KEYS.B} format={format} />
      <Label data-testid={accessKeyEsc} type={KEYS.esc} format={format} />
    </Bar>
}

function mapDispatchToProps (dispatch) {
  return {
    onKeyDown: ({ keyCode }) => {
      switch (keyCode) {
        case KEY_CODES.A:
          dispatch(userRespondedWithYes())
          break
        case KEY_CODES.B:
          dispatch(userRespondedWithNo())
          break
        case KEY_CODES.esc:
          dispatch(userRespondedWithNotSure())
          break
        default:
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(AccessKeyBar)
