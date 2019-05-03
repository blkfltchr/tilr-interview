import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../actions/questions'
import { getSingleUser } from '../../actions/users'
import QuestionCard from './QuestionCard'

class QuestionList extends Component {

  componentDidMount() {
    this.props.fetchQuestions()
    this.props.getSingleUser()
  }

  render() {
    return (
      <div className='question-list'>
        <h3>Recently Added</h3>
        {this.props.questions.map(question => (
          <QuestionCard question={question} key={question.question_id} />
        ))}
      </div>
    )
  }
}
// ({ questions, users })
const mapStateToProps = state => ({
  questions: state.questions.all,
  loadingUsers: state.users.singleUser,
  singleUser: state.users.singleUser
})

const mapDispatchToProps = {
  fetchQuestions,
  getSingleUser
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
