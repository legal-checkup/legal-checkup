import { includes } from 'ramda'

import {
  DESKTOP,
  MOBILE,
  TABLET,
  WHITE,
  ROUGE,
  OFF_WHITE,
  TRANSPARENT
} from '../../../../constants'

export function getLinkColor ({ format = '', active } = {}) {
  return includes('Header', format) && active ? `${ROUGE}` : `${WHITE}`
}

export function getLinkBorder ({ format = '', active } = {}) {
  if (format === `${DESKTOP}Header` || format === `${TABLET}Header`) {
    return active === true ? `2px solid ${ROUGE}` : `2px solid ${TRANSPARENT}`
  }
  return null
}

export function getLinkBackgroundColor ({ format = '', active } = {}) {
  return format === `${MOBILE}Header` && active ? `${OFF_WHITE}` : null
}

export function getLinkFontWeight ({ format = '', active } = {}) {
  if (format === `${MOBILE}Header` && active === true) {
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
