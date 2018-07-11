import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  ${styledNormalize}

  body {
    font-family: "Open Sans", Verdana, sans-serif;
    font-size: 1.1rem;
    line-height: 1.5;
    padding: 0;
  }
`
