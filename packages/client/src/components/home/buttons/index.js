import {
  StartCheckupButton,
  AboutCommunityLawButton,
  CommunityLawServicesButton
} from './style'
import { makeLinkInternal } from '../../Link'

const StartCheckup = makeLinkInternal(StartCheckupButton)
const AboutCommunityLaw = makeLinkInternal(AboutCommunityLawButton)
const CommunityLawServices = makeLinkInternal(CommunityLawServicesButton)

export { StartCheckup, AboutCommunityLaw, CommunityLawServices }
