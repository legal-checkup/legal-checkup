import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import {
  MuseoSansCyrl_500,
  MuseoSansCyrl_500_italic,
  MuseoSansCyrl_700,
  MuseoSansCyrl_900
} from '../fonts'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: 'Museo Sans Cyrl 900';
    src: url(${MuseoSansCyrl_900}) format('woff');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 700';
    src: url(${MuseoSansCyrl_700}) format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 500';
    src: url(${MuseoSansCyrl_500}) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 500 italic';
    src: url(${MuseoSansCyrl_500_italic}) format('woff');
    font-weight: 500;
    font-style: italic;
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
