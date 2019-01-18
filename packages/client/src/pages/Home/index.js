import * as React from 'react'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import {
  HomeContainer,
  HomeSection,
  HomeTextContainer
} from '../../components/layout/Section'
import Intro from '../../components/home/Intro'
import { StartCheckup } from '../../components/home/buttons'
import Blurbs from '../../components/home/Blurbs'
import Outro from '../../components/home/Outro'

import { CHECKUP_PATH } from '../../state/constants'

import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <HomeContainer>
        <HomeSection>
          <HomeTextContainer format={format}>
            <Intro format={format} />
          </HomeTextContainer>
        </HomeSection>
        <HomeSection>
          <HomeTextContainer format={format}>
            <StartCheckup format={format} to={CHECKUP_PATH}>
              Start Checkup
            </StartCheckup>

            <Blurbs format={format} />
          </HomeTextContainer>
        </HomeSection>
        <HomeSection>
          <HomeTextContainer format={format}>
            <Outro format={format} />
          </HomeTextContainer>
        </HomeSection>
      </HomeContainer>
      {/* <Footer format={format} /> */}
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
