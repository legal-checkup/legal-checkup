import React, { Fragment } from 'react'

import Footer from '../Footer'
import { Helmet } from 'react-helmet'
import StyledLayout from '../styled/Layout'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>

      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </Fragment>
  )
}
