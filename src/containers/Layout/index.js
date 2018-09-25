import React, { Fragment } from 'react'

import { Desktop, Tablet, Mobile, Default } from '@responsive'

import Header from '../Header'
import DesktopHeader from '@containers/DesktopHeader'
import Footer from '@components/Footer'
import { Helmet } from 'react-helmet'
import StyledLayout from '@components/styled/Layout'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Desktop>
        <Helmet>
          <title>Legal Checkup</title>
        </Helmet>

        <DesktopHeader />
        <StyledLayout>{children}</StyledLayout>
        <Footer />
      </Desktop>

      <Tablet>
        <Helmet>
          <title>Legal Checkup</title>
        </Helmet>

        <Header />
        <StyledLayout>{children}</StyledLayout>
        <Footer />
      </Tablet>

      <Mobile>
        <Helmet>
          <title>Legal Checkup</title>
        </Helmet>

        <Header />
        <StyledLayout>{children}</StyledLayout>
        <Footer />
      </Mobile>

      <Default>
        <Helmet>
          <title>Legal Checkup</title>
        </Helmet>

        <Header />
        <StyledLayout>{children}</StyledLayout>
        <Footer />
      </Default>
    </Fragment>
  )
}
