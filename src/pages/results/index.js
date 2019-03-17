import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Section from '../../components/layout/Section'
import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import Hero from '../../components/results/Hero'
import RedoButton from '../../components/results/RedoButton'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <Section format={format}>
        <Hero format={format} />
        <RedoButton format={format} />
      </Section>
      <Footer format={format} />
    </>
  )
}

export default function Results () {
  return (
    <>
      <Helmet>
        <title>Results :: {WEBSITE}</title>
      </Helmet>
      <Mobile>{getLayout(MOBILE)}</Mobile>
      <Tablet>{getLayout(TABLET)}</Tablet>
      <Desktop>{getLayout(DESKTOP)}</Desktop>
    </>
  )
}
