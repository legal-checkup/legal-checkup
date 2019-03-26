import { includes } from 'ramda'

import {
  DESKTOP,
  MOBILE,
  TABLET,
  WHITE,
  FOREGROUND_LINK_ACTIVE,
  BORDER_LINK_ACTIVE,
  OFF_WHITE,
  TRANSPARENT
} from '../../../../constants'

export function getLinkColor ({ format = '', active } = {}) {
  // console.log('format', format, 'active', active)
  return includes('Header', format) && active
    ? `${FOREGROUND_LINK_ACTIVE}`
    : `${WHITE}`
}

export function getLinkBorder ({ format = '', active } = {}) {
  if (format === `${DESKTOP}Header` || format === `${TABLET}Header`) {
    return active
      ? `2px solid ${BORDER_LINK_ACTIVE}`
      : `2px solid ${TRANSPARENT}`
  }
  return null
}

export function getLinkBackgroundColor ({ format = '', active } = {}) {
  return format === `${MOBILE}Header` && active ? `${OFF_WHITE}` : null
}

export function getLinkFontWeight ({ format = '', active } = {}) {
  if (format === `${MOBILE}Header` && active) {
    return 900
  }
  return 500
}

export function getLinkFontFamily ({ format = '', active } = {}) {
  if (format === `${MOBILE}Header`) {
    return active === true ? `'Museo Sans Cyrl 900'` : `'Museo Sans Cyrl 500'`
  }
  return `'Museo Sans Cyrl 500'`
}
