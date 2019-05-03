import React, { Component } from 'react'

class QuestionCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answer_text: ''
    }
  }
  render() {
    const { text } = this.props.question
    return ( 
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{text}</h5>
          <div className='card-body'>
            <input
              className='form-control'
              onChange={ ({ target }) => this.setState({ answer_text: target.value }) }
              placeholder='Enter your answer...'
              value={this.state.answer_text}
            />
            <button type='submit' className='btn btn-primary mt-2'>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
 
export default QuestionCard