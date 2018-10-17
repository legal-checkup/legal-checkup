import React, { Fragment } from 'react'

import MobileFooter from '../MobileFooter'
import Header from '../Header'
import { Helmet } from 'react-helmet'
import StyledLayout from '@components/styled/Layout'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <Header />
      <StyledLayout>{children}</StyledLayout>
      <MobileFooter />
    </Fragment>
  )
}
