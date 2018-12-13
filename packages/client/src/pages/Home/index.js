import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import {
  HomeContainer,
  HomeSection,
  HomeTextContainer
} from '../../components/layout/Section'
import Intro from '../../components/home/Intro'

import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <HomeContainer format={format}>
        <HomeSection>
          <HomeTextContainer format={format}>
            <Intro format={format} />
          </HomeTextContainer>
        </HomeSection>
        <HomeSection>
          <HomeTextContainer format={format} />
        </HomeSection>
        <HomeSection>
          <HomeTextContainer format={format} />
        </HomeSection>
      </HomeContainer>
      <Footer format={format} />
    </>
  )
}

export default function Home () {
  return (
    <>
      <Helmet>
        <title>{WEBSITE}</title>
      </Helmet>
      <Mobile>{getLayout(MOBILE)}</Mobile>
      <Tablet>{getLayout(TABLET)}</Tablet>
      <Desktop>{getLayout(DESKTOP)}</Desktop>
    </>
  )
}
