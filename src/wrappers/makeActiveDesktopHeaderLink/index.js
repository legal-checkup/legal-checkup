import React from 'react'
import LinkInternal from '@containers/LinkInternal'

function makeActiveDesktopHeaderLink (Component) {
  return ({ to, pathname, children }) => (
    <Component {...(to === pathname ? { active: true } : {})}>
      <LinkInternal to={to}>{children}</LinkInternal>
    </Component>
  )
}

export default makeActiveDesktopHeaderLink
