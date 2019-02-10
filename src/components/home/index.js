import * as React from 'react'

import {
  HomeContainer,
  HomeSection,
  HomeTextContainer
} from '../layout/Section'
import Intro from './Intro'
import { StartCheckup } from './buttons'
import Blurbs from './Blurbs'
import Outro from './Outro'

import { CHECKUP_PATH } from '../../state/constants'

export default function Home ({ format }) {
  return (
    <>
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
    </>
  )
}
