import * as React from 'react'

import { PageSection, PageTextContainer } from '../layout/Section'
import Intro from './Intro'
import { StartCheckup } from './buttons'
import Blurbs from './Blurbs'
import Outro from './Outro'

import { CHECKUP_PATH } from '../../state/constants'

export default function Home ({ format }) {
  return (
    <>
      <PageSection>
        <PageTextContainer format={format}>
          <Intro format={format} />
        </PageTextContainer>
      </PageSection>
      <PageSection>
        <PageTextContainer format={format}>
          <StartCheckup format={format} to={CHECKUP_PATH}>
            Start Checkup
          </StartCheckup>
          <Blurbs format={format} />
        </PageTextContainer>
      </PageSection>
      <PageSection>
        <PageTextContainer format={format}>
          <Outro format={format} />
        </PageTextContainer>
      </PageSection>
    </>
  )
}
