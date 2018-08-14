import React from 'react'
import styled from 'styled-components'
import { keysIn } from 'ramda'

import { INITIAL_STATE } from '../../state/constants.js'

const { questions } = INITIAL_STATE
const order = keysIn(questions)

const f = (a, b) => a - b

// const bar = styled.bar`
// width: ${props => props.progress}
// height: 10px;
// background-color: #4CAF50;

export default function ProgressBar ({}) {
  // return <span>{sort (f, order)}</span>
}
