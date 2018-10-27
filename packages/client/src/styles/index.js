import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url(‘https://fonts.googleapis.com/css?family=Merriweather|Montserrat');

  body {
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  .react-tooltip {
    max-width: 36vw;
    font-size: 1rem;
  }
`

export default GlobalStyle
