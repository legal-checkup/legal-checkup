import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: 'Museo Sans Cyrl 900';
    src: url('./fonts/MuseoSansCyrl_900.woff') format('woff');
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 500';
    src: url('./fonts/MuseoSansCyrl_500.woff') format('woff');
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 500 italic';
    src: url('./fonts/MuseoSansCyrl_500_italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 700';
    src: url('./fonts/MuseoSansCyrl_700.woff') format('woff');
  }

  body {
    font-family: 'Museo Sans Cyrl 500', sans-serif;
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
