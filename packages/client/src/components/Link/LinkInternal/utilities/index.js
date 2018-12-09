import { includes } from 'ramda'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

export function getLinkColor ({ format = '', active } = {}) {
  return includes('Header', format) && active ? '#b62645' : '#fff'
}

export function getLinkBorder ({ format = '', active } = {}) {
  if (format === `${DESKTOP}Header` || format === `${TABLET}Header`) {
    return active === true ? '2px solid #b62645' : '2px solid transparent'
  }
  return null
}

export function getLinkBackgroundColor ({ format = '', active } = {}) {
  return format === `${MOBILE}Header` && active ? '#eeedea' : null
}

export function getLinkFontWeight ({ format = '', active } = {}) {
  if (format === `${MOBILE}Header`) {
    return active === true ? 900 : 500
  }
  return 500
}
