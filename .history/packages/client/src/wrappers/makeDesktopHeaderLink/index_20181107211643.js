import React from 'react'

import LinkInternal from '@containers/LinkInternal'

function makeDesktopHeaderLink (Component) {
  return function withActive ({ to, pathname, children, ...props }) {
    return to === pathname ? (
      <Component {...props} active>
        {children}
      </Component>
    ) : (
      <Component {...props}>
        <LinkInternal to={to}>{children}</LinkInternal>
      </Component>
    )
  }
}

export default makeDesktopHeaderLink