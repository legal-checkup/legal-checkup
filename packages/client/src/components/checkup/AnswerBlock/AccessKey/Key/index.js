import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'
import { ESC, A } from '../../../../../state/constants'

function getKeyPush (e) {
  if (e.keyCode === 65) {
    if (document.getElementsByClassName('sc-VigVT jBObtV')[0] !== undefined) {
      document.getElementsByClassName('sc-VigVT jBObtV')[0].click()
    }
  } else if (e.keyCode === 66) {
    if (document.getElementsByClassName('sc-VigVT jBObtV')[0] !== undefined) {
      document.getElementsByClassName('sc-VigVT kvKjKg')[0].click()
    }
  } else if (e.keyCode === 27) {
    if (document.getElementsByClassName('sc-VigVT jBObtV')[0] !== undefined) {
      document.getElementsByClassName('sc-VigVT cGhvZs')[0].click()
    }
  }
}

document.addEventListener('keyup', getKeyPush, false)

function setWidthKey (format, type) {
  if (format === (DESKTOP || TABLET)) {
    if (type === ESC) {
      return '49px'
    } else {
      return '29px'
    }
  }
}

function setMarginRight (format, type) {
  if (format === DESKTOP) {
    if (type === ESC) {
      return 0
    } else if (type === A) {
      return '133px'
    } else {
      return '125px'
    }
  } else if (format === TABLET) {
    if (type === ESC) {
      return 0
    } else if (type === A) {
      return '133px'
    } else {
      return '125px'
    }
  } else {
    if (type === ESC) {
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
    display:none`,
    [TABLET]: `
    border-radius: 5px;
    font-size:18px;`
  })}
`
Key.displayName = 'Key'

export default Key
