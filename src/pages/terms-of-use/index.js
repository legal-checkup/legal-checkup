import * as React from 'react'
import { Helmet } from 'react-helmet'

import { WEBSITE, TERMS_PAGE } from '../../constants'
import TermsPageContent from '../../components/TermsPageContent'
import { PageSection, PageTextContainer } from '../../components/layout/Section'
import { FormatConsumer } from '../../components/layout/FormatContext'

export default function TermsOfUse () {
  return (
    <>
      <Helmet>
        <title>Terms of Use :: {WEBSITE}</title>
      </Helmet>
      <FormatConsumer>
        {value => (
          <PageSection>
            <PageTextContainer format={value} page={TERMS_PAGE}>
              <TermsPageContent format={value} />
            </PageTextContainer>
          </PageSection>
        )}
      </FormatConsumer>
    </>
  )
}
