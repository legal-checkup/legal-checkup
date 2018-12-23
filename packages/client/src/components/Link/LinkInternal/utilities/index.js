import { includes } from 'ramda'

import {
  DESKTOP,
  MOBILE,
  TABLET,
  WHITE,
  RED_ACCENT,
  OFF_WHITE
} from '../../../../constants'

export function getLinkColor ({ format = '', active } = {}) {
  return includes('Header', format) && active ? `#${RED_ACCENT}` : `#${WHITE}`
}

export function getLinkBorder ({ format = '', active } = {}) {
  if (format === `${DESKTOP}Header` || format === `${TABLET}Header`) {
    return active === true
      ? `2px solid #${RED_ACCENT}`
      : '2px solid transparent'
  }
  return null
}

export function getLinkBackgroundColor ({ format = '', active } = {}) {
  return format === `${MOBILE}Header` && active ? `#${OFF_WHITE}` : null
}

export function getLinkFontWeight ({ format = '', active } = {}) {
  if (format === `${MOBILE}Header` && active === true) {
    return 900
  }
  return 500
}
