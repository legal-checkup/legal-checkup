import * as React from 'react'
import { Helmet } from 'react-helmet'

import Section from '../../components/layout/Section'

import { WEBSITE } from '../../constants'
import { FormatConsumer } from '../../components/layout/FormatContext'

export default function Help () {
  return (
    <>
      <Helmet>
        <title>Help :: {WEBSITE}</title>
      </Helmet>
      <FormatConsumer>
        {value => (
          <Section>
            <p>
              This is the <strong>Help</strong> page
            </p>
          </Section>
        )}
      </FormatConsumer>
    </>
  )
}
