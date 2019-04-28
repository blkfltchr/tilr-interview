import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/users'

class Signup extends Component {
  constructor() {
    super()
    this.state = { 
      email: '',
      password: ''  
    }
  }

  signupUser(event) {
    const { email, password } = this.state
    event.preventDefault()
    this.props.signupUser(email, password)
  }

  render() {
    const { email, password } = this.state

    return (
      <form onSubmit={event => this.signupUser(event)} className='question-form'>
        <h3>Sign up</h3>
        <div class='form-group'>
          <input
            className='form-control'
            onChange={({ target }) => this.setState({ email: target.value })}
            placeholder='Enter your email...'
            value={email}
          />
        </div>
        <div class='form-group'>
          <input
            className='form-control'
            onChange={({ target }) => this.setState({ password: target.value })}
            placeholder='Enter your password...'
            value={password}
            type='password'
          />
        </div>
        <div class='form-group'>
          <button
            className='btn btn-primary'
            disabled={email === '' || password === ''}
            type='submit'
          >
            Sign up
          </button>
        </div>
        <div class='form-group'>
          <Link to='/login'>Already have an account? Click here to log in.</Link>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  signupUser
}

export default connect(null, mapDispatchToProps)(Signup)
