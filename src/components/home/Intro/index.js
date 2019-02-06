import React, { Fragment } from 'react'

import { PageHeading, PageText } from '../../styled/index'

function Intro ({ format }) {
  return (
    <Fragment>
      <PageHeading format={format}>How's your legal health?</PageHeading>
      <PageText format={format}>
        Many people do not think of their everyday problems as being "legal
        problems" and do not know that they can get help from a lawyer.
      </PageText>
      <PageText format={format}>
        This Checkup is to help you identify these problems for yourself.
      </PageText>
    </Fragment>
  )
}

export default Intro
