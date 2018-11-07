import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
import MobileHeader from './MobileHeader'
import Section from './Section'

export default function Layout ({ children }) {
  return (
    <>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <MobileHeader />
      <Section>{children}</Section>
      <Footer />
    </>
  )
}
