import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
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
      <Footer />
    </>
  )
}
