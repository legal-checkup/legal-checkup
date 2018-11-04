import React from 'react'
import LinkInternal from '@containers/LinkInternal'

function makeDesktopHeaderLink (Component) {
  return function withActive ({ to, pathname, children, ...props }) {
    if (to === pathname) {
      return (
        <Component {...props} active>
          {children}
        </Component>
      )
    } else {
      return (
        <Component {...props}>
          <LinkInternal to={to}>{children}</LinkInternal>
        </Component>
      )
    }
  }
}

export default makeDesktopHeaderLink
