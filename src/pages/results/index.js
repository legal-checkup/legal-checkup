import * as React from 'react'
import { Helmet } from 'react-helmet'

import Section from '../../components/layout/Section'

import Hero from '../../components/results/Hero'
import RedoButton from '../../components/results/RedoButton'
import { WEBSITE } from '../../constants'
import { FormatConsumer } from '../../components/layout/FormatContext'

export default function Results () {
  return (
    <>
      <Helmet>
        <title>Results :: {WEBSITE}</title>
      </Helmet>
      <FormatConsumer>
        {value => (
          <Section>
            <Hero format={value} />
            <RedoButton format={value} />
          </Section>
        )}
      </FormatConsumer>
    </>
  )
}
