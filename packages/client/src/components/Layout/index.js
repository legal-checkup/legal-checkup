import * as React from 'react'
import { Helmet } from 'react-helmet'

import DesktopFooter from './DesktopFooter'
import Header from './Header'
import Section from './Section'

export default function Layout ({ children }) {
  return (
    <>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <Header />
      <Section>{children}</Section>
      <DesktopFooter />
    </>
  )
}
