import React, { Fragment } from 'react'

import { HEADING_TEXT, INTRO, INTRO_2 } from '../constants'
import { PageHeading, PageText } from '../../styled/index'

function Intro ({ format }) {
  return (
    <Fragment>
      <PageHeading format={format}>{HEADING_TEXT}</PageHeading>
      <PageText>{INTRO}</PageText>
      <PageText>{INTRO_2}</PageText>
    </Fragment>
  )
}

export default Intro
