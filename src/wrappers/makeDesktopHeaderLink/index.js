import React from 'react'
import LinkInternal from '@containers/LinkInternal'

function makeDesktopHeaderLink (Component) {
  return ({ to, pathname, children }) => (
    <Component {...(to === pathname ? { active: true } : {})} to={to}>
      <LinkInternal to={to}>{children}</LinkInternal>
    </Component>
  )
}

export default makeDesktopHeaderLink
