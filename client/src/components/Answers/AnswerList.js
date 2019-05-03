import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAnswers } from '../../actions/answers'

class AnswerList extends Component {
  componentDidMount() {
    this.props.fetchAnswers()
  }

  render() {
    console.log(this.props)
    return (
      <div className='question-list'>
        <h3>Recently Added</h3>
        {this.props.answers.map(answer => (
          <div className='card' key={answer.question_id}>
            <div className='card-body'>
              <h5 className='card-title'>{answer.text}</h5>
              <div className='card-body'>
                <button className='btn btn-success' style={{ marginRight: 10 }}>Yes</button>
                <button className='btn btn-danger'>No</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  answers: state.answers.all
})

const mapDispatchToProps = {
  fetchAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList)
