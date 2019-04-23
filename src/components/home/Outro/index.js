import React, { Fragment } from 'react'

import { PageText } from '../../styled/index'
import Link from '../../Link'
import { AboutCommunityLaw, CommunityLawServices } from '../buttons'
import {
  ABOUT_COMMUNITY_LAW_URL,
  COMMUNITY_LAW_SERVICES_URL
} from '../../../state/constants'

function Outro ({ format }) {
  return (
    <Fragment>
      <PageText format={format}>
        Legal Checkup is brought to you by
        <Link format={format} href='http://www.wclc.org.nz/'>
          {' '}
          Wellington and Hutt Valley Community Law
        </Link>{' '}
        - where you can get free legal advice on all the topics covered by this
        quiz.
      </PageText>
      <AboutCommunityLaw format={format} href={ABOUT_COMMUNITY_LAW_URL}>
        About Community Law
      </AboutCommunityLaw>
      <CommunityLawServices format={format} href={COMMUNITY_LAW_SERVICES_URL}>
        Community Law Services
      </CommunityLawServices>
    </Fragment>
  )
}

export default Outro
