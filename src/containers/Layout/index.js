import React, { Fragment } from 'react'

import Footer from '@components/Footer'
import MobileHeader from '../MobileHeader'
import { Helmet } from 'react-helmet'
import StyledLayout from '@components/styled/Layout'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <MobileHeader />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </Fragment>
  )
}
