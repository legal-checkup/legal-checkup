import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE, TERMS_PAGE } from '../../constants'
import TermsPageContent from '../../components/TermsPageContent'
import { PageSection, PageTextContainer } from '../../components/layout/Section'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <PageSection>
        <PageTextContainer format={format} page={TERMS_PAGE}>
          <TermsPageContent format={format} />
        </PageTextContainer>
      </PageSection>

      <Footer format={format} />
    </>
  )
}

export default function TermsOfUse () {
  return (
    <>
      <Helmet>
        <title>Terms of Use :: {WEBSITE}</title>
      </Helmet>
      <Mobile>{getLayout(MOBILE)}</Mobile>
      <Tablet>{getLayout(TABLET)}</Tablet>
      <Desktop>{getLayout(DESKTOP)}</Desktop>
    </>
  )
}
