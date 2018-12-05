import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'
import { esc, A } from '../../../../../state/constants'

function setWidthKey (format, type) {
  if (format === (DESKTOP || TABLET)) {
    if (type === esc) {
      return '49px'
    } else {
      return '29px'
    }
  }
}

function setMarginRight (format, type) {
  if (format === DESKTOP) {
    if (type === esc) {
      return 0
    } else if (type === A) {
      return '133px'
    } else {
      return '125px'
    }
  } else if (format === TABLET) {
    if (type === esc) {
      return 0
    } else if (type === A) {
      return '133px'
    } else {
      return '125px'
    }
  } else {
    if (type === esc) {
      return 0
    } else {
      return '7px'
    }
  }
}

const Key = styled.button`
  background-color: #ffffff;
  color: #a0a0a0;
  height: 29px;
  box-shadow: 0 2px 0 0 #cccccc;
  background-color: #ffffff;
  font-family:MuseoSans;
  font-weight:500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: ${({ format, type }) => setWidthKey(format, type)};
  margin-right: ${({ format, type }) => setMarginRight(format, type)};,
  &:after {
    content: '${({ type }) => type}';
  }
  ${styledMap('format', {
    [DESKTOP]: `
    border-radius: 5px;
    font-size:18px;`,
    [MOBILE]: `
    border-radius: 4px;
    font-size:18px;`,
    [TABLET]: `
    border-radius: 5px;
    font-size:18px;`
  })}
`
Key.displayName = 'Key'

export default Key
