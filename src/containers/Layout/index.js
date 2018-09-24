import React, { Fragment } from 'react'

import Footer from '@components/Footer'
import DesktopHeader from '@components/DesktopHeader'
import { Helmet } from 'react-helmet'
import StyledLayout from '@components/styled/Layout'

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
