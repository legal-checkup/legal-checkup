import React, { Fragment } from 'react'

import {
  HEADING_TEXT,
  HEADING_TEXT2,
  INTRO,
  INTRO_2,
  INTRO_3
} from '../constants'
import { PageHeading, PageText } from '../../styled/index'

function Intro ({ format }) {
  return (
    <Fragment>
      <PageHeading format={format}>{HEADING_TEXT}</PageHeading>
      <PageText>{INTRO}</PageText>
      <PageHeading format={format}>{HEADING_TEXT2}</PageHeading>
      <PageText>{INTRO_2}</PageText>
      <PageText>{INTRO_3}</PageText>
    </Fragment>
  )
}

export default Intro
