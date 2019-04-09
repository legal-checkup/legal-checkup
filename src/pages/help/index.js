import * as React from 'react'
import { Helmet } from 'react-helmet'

import { WEBSITE, HELP_PAGE } from '../../constants'
import HelpPageContent from '../../components/HelpPageContent'
import { PageSection, PageTextContainer } from '../../components/layout/Section'
import { FormatConsumer } from '../../components/layout/FormatContext'

export default function Help () {
  return (
    <>
      <Helmet>
        <title>Help :: {WEBSITE}</title>
      </Helmet>
      <FormatConsumer>
        {value => (
          <PageSection>
            <PageTextContainer format={value} page={HELP_PAGE}>
              <HelpPageContent format={value} />
            </PageTextContainer>
          </PageSection>
        )}
      </FormatConsumer>
    </>
  )
}
