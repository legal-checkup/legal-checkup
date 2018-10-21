import React from 'react'
import FooterLink from '@containers/FooterLink'

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
          <FooterLink to={to}>{children}</FooterLink>
        </Component>
      )
    }
  }
}

export default makeDesktopFooterLink
