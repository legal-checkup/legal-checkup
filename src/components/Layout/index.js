import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { Header, Footer, AnswerBar } from '..'
import { StyledLayout } from '../styled'

export default function Layout ({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Legal Checkup</title>
      </Helmet>
      <Header />
      <StyledLayout>{children}</StyledLayout>
      <AnswerBar />
      <Footer />
    </Fragment>
  )
}
