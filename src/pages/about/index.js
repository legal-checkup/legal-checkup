import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE, ABOUT_PAGE } from '../../constants'
import AboutPageContent from '../../components/AboutPageContent'
import { PageSection, PageTextContainer } from '../../components/layout/Section'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <PageSection>
        <PageTextContainer format={format} page={ABOUT_PAGE}>
          <AboutPageContent format={format} />
        </PageTextContainer>
      </PageSection>
      <Footer format={format} />
    </>
  )
}

export default function About () {
  return (
    <>
      <Helmet>
        <title>About :: {WEBSITE}</title>
      </Helmet>
      <Mobile>{getLayout(MOBILE)}</Mobile>
      <Tablet>{getLayout(TABLET)}</Tablet>
      <Desktop>{getLayout(DESKTOP)}</Desktop>
    </>
  )
}
