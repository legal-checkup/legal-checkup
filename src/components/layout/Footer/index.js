import * as React from 'react'

import { COMMUNITY_LAW_URL, PRIVACY_POLICY_PATH, TERMS_OF_USE_PATH } from '../../../state/constants'
import {
  footerWrapper,
  communityLawUrl,
  privacyPolicyPath,
  termsOfUsePath
} from '../../../constants'
import Link from '../../Link'
import Wrapper from './Wrapper'

export default function Footer ({ format }) {
  return (
    <Wrapper format={format} data-testid={footerWrapper}>
      <Link href={COMMUNITY_LAW_URL} format={`${format}Footer`} data-testid={communityLawUrl}>
      &copy; {new Date().getFullYear()} Community Law Wellington &amp; Hutt Valley
      </Link>
      <Link to={PRIVACY_POLICY_PATH} format={`${format}Footer`} data-testid={privacyPolicyPath}>Privacy Policy</Link>
      <Link to={TERMS_OF_USE_PATH} format={`${format}Footer`} data-testid={termsOfUsePath}>Terms of Use</Link>
    </Wrapper>
  )
}
