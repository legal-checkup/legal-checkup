import React from 'react'
import styled from 'styled-components'

const bar = styled.bar`
width: ${props => props.progress}  
height: 10px;
background-color: #4CAF50;
`
export default class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 0,
      question_number: ''
    }
    this.checkProgress = this.checkProgress.bind(this)
    this.renderProgressBar = this.renderProgressBar.bind(this)
  }

  checkProgress (question_number) {
    let progress = 0

    if (question_number > 0) {
      return (progress += 1)
    }
  }

  render () {

  }
}
