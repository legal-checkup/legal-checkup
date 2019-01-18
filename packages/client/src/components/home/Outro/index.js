import React, { Fragment } from 'react'

import { PageText } from '../../styled/index'
import Link from '../../Link'

function Intro ({ format }) {
  return (
    <Fragment>
      <PageText format={format}>
        Legal Checkup is brought to you by
        <Link format={format} href='http://www.wclc.org.nz/'>
          {' '}
          Wellington and Hutt Valley Community Law
        </Link>{' '}
        - where you can get free legal advice on all the topics covered by this
        quiz.
      </PageText>
    </Fragment>
  )
}

export default Intro
