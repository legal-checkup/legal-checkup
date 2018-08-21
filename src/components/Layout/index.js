import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { DesktopHeader, Footer } from '..'
import { StyledLayout } from '../styled'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <DesktopHeader />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </Fragment>
  )
}
