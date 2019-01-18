import React from 'react'

import ClockImage from './images/ClockImage'
import TickImage from './images/TickImage'
import LockImage from './images/LockImage'

import { BlurbsWrapper } from './style'

import Blurb from './Blurb'

function Blurbs ({ format }) {
  return (
    <BlurbsWrapper format={format}>
      <Blurb
        image={<ClockImage />}
        title={`Fast`}
        supportingText={`Legal Health Checkup is a simple quiz that takes less than 5 minutes to do.`}
        format={format}
      />
      <Blurb
        image={<TickImage />}
        title={`Simple`}
        supportingText={`Simple 'yes' or 'no' questions about everyday issues, that a lawyer or legal advice could help you with.`}
        format={format}
      />
      <Blurb
        image={<LockImage />}
        title={`Secure`}
        supportingText={`This survey is completely anonymous, no personal details are requested, and no results are stored.`}
        format={format}
      />
    </BlurbsWrapper>
  )
}

export default Blurbs
