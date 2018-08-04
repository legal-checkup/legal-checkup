import React from 'react'
import styled from 'styled-components'

// const Bar = Bar.styled`
// `
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  height: 40em;
  width: 60em;
  position: center;
  background: palevioletred;
`

const QuestionBox = styled.div`
  width: 50em;
  height: 20em;
  margin-left: 4em;
  margin-top: 5em;
  padding-left: calc;
  background-color: blue;  
  }`

const BarWrapper = styled.div`
  background-color: red;
  height: 25px;
  border-radius: 34px;
  padding: 13px 5px;
  overflow: hidden;
  margin-top: 6em;
  align-items: center;
  display: flex;
  div {
    background-color: ${props => (0.3, props.color)};
    height: 15px;
    border-radius: 20px;
    transition: 300ms width;
    will-change: width;
    width: ${props => props.progress}%;
    min-width: 5px;
  }
`

// Use Title and Wrapper like any other React component – except they're styled!

export default class Prog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: true
    }
  }

  // This funciton recieves the props (questions) from possibliy a variable containing them and sets the state for them

  // componentDidMount () {
  //     this.props.dispatch(fetchQuestions())
  // }

  // This functions updates questions
  //  updateQuestion (question) {

  //  }

  render () {
    return (
      <Wrapper>
        <Title>Drop questions below!</Title>
        <QuestionBox>
          {/* {this.state.questions

              // <h3>{this.props.questions.length > 0 && question.question}</h3>

             <button onClick = {() => this.updateQuestion()} value='button1' className='button'>{this.props.questions.length > 0 && question.answers[0]}</button>
             <button onClick = {() => this.updateQuestion()} value='button2' className='button'>{this.props.questions.length > 0 && question.answers[1]}</button>
          } */}
        </QuestionBox>
        <BarWrapper />
      </Wrapper>
    )
  }
}
