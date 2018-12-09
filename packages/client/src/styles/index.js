import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: 'Museo Sans Cyrl 900';
    font-style: normal;
    font-weight: normal;
    src: local('Museo Sans Cyrl 900'), url('./fonts/MuseoSansCyrl_3.woff') format('woff');
  }

  body {
    font-family: 'Museo Sans Cyrl 900', sans-serif;
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
