import {
  StartCheckupButton,
  AboutCommunityLawButton,
  CommunityLawServicesButton
} from './style'
import { makeLinkInternal, makeLinkExternal } from '../../Link'

const StartCheckup = makeLinkInternal(StartCheckupButton)
const AboutCommunityLaw = makeLinkExternal(AboutCommunityLawButton)
const CommunityLawServices = makeLinkExternal(CommunityLawServicesButton)

export { StartCheckup, AboutCommunityLaw, CommunityLawServices }
