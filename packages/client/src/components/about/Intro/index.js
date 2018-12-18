import React, { Fragment } from 'react'

import {
  HEADING_TEXT,
  HEADING_TEXT2,
  INTRO,
  INTRO_2,
  INTRO_3,
  INTRO_4,
  INTRO_5,
  INTRO_6,
  INTRO_7
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
      <PageText>{INTRO_4}</PageText>
      <PageText>{INTRO_5}</PageText>
      <PageText>{INTRO_6}</PageText>
      <PageText>{INTRO_7}</PageText>
    </Fragment>
  )
}

export default Intro
