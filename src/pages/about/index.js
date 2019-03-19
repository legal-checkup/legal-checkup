import * as React from 'react'
import { Helmet } from 'react-helmet'

import { WEBSITE, ABOUT_PAGE } from '../../constants'
import AboutPageContent from '../../components/AboutPageContent'
import { PageSection, PageTextContainer } from '../../components/layout/Section'
import { FormatConsumer } from '../../components/layout/FormatContext'

export default function About () {
  return (
    <>
      <Helmet>
        <title>About :: {WEBSITE}</title>
      </Helmet>
      <FormatConsumer>
        {value => (
          <PageSection>
            <PageTextContainer format={value} page={ABOUT_PAGE}>
              <AboutPageContent format={value} />
            </PageTextContainer>
          </PageSection>
        )}
      </FormatConsumer>
    </>
  )
}
