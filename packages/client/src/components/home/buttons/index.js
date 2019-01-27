import React from 'react'

import {
  StartCheckupButton,
  AboutCommunityLawButton,
  CommunityLawServicesButton
} from './style'
import { makeLinkInternal, makeLinkExternal } from '../../Link'

const StartCheckup = makeLinkInternal(StartCheckupButton)
const AboutCommunityLaw = makeLinkExternal(AboutCommunityLawButton)
const CommunityLawServices = makeLinkExternal(CommunityLawServicesButton)

console.log(StartCheckup)
console.log(<AboutCommunityLaw />)

export { StartCheckup, AboutCommunityLaw, CommunityLawServices }
