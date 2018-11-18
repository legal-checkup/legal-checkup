import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Section from '../../components/layout/Section'
import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <Section>
        <p>
          This is the <strong>Help</strong> page
        </p>
      </Section>
      <Footer format={format} />
    </>
  )
}

export default function Help () {
  return (
    <>
      <Helmet>
        <title>Help :: {WEBSITE}</title>
      </Helmet>
      <Mobile>
        {getLayout(MOBILE)}
      </Mobile>
      <Tablet>
        {getLayout(TABLET)}
      </Tablet>
      <Desktop>
        {getLayout(DESKTOP)}
      </Desktop>
    </>
  )
}
