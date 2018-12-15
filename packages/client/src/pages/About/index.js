import * as React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import { Container, TopSection, TextContainer } from '../../components/layout/Section'
import Desktop from '../../components/responsive/Desktop'
import Mobile from '../../components/responsive/Mobile'
import Tablet from '../../components/responsive/Tablet'
import { DESKTOP, MOBILE, TABLET, WEBSITE } from '../../constants'
import Intro from '../../components/about/Intro'

function getLayout (format) {
  return (
    <>
      <Header format={format} />
      <Container format={format}>
        <TopSection>
          <TextContainer format={format}>
            <Intro format={format} />
          </TextContainer>
        </TopSection>
        <TopSection>
          <TextContainer format={format} />
        </TopSection>
        <TopSection>
          <TextContainer format={format} />
        </TopSection>
      </Container>
      <Footer format={format} />
    </>
  )
}

export default function About () {
  return (
    <>
      <Helmet>
        <title>About us :: {WEBSITE}</title>
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
