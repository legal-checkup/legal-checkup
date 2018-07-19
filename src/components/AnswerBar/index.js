import React from 'react'

export default class AnswerBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selectedOption: 'option1' }
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <form>
              <div className='radio'>
                <label>
                  <input
                    type='radio'
                    value='option1'
                    checked={this.state.selectedOption === 'option1'}
                    onChange={this.handleOptionChange}
                  />
                  Yes
                </label>
              </div>
              <div className='radio'>
                <label>
                  <input
                    type='radio'
                    value='option2'
                    checked={this.state.selectedOption === 'option2'}
                    onChange={this.handleOptionChange}
                  />
                  No
                </label>
              </div>
              <div className='radio'>
                <label>
                  <input
                    type='radio'
                    value='option3'
                    checked={this.state.selectedOption === 'option3'}
                    onChange={this.handleOptionChange}
                  />
                  Don't know
                </label>
              </div>
              <button className='btn btn-default' type='submit'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
