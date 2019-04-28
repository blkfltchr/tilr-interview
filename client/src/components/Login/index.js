import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/users'

class Login extends Component {
  constructor() {
    super()
    this.state = { 
      email: '',
      password: ''  
    }
  }

  loginUser(event) {
    const { email, password } = this.state
    event.preventDefault()
    this.props.loginUser(email, password)
  }

  render() {
    const { email, password } = this.state

    return (
      <form onSubmit={event => this.loginUser(event)} className='question-form'>
        <h3>Log in</h3>
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ email: target.value })}
          placeholder='Enter your email...'
          value={email}
        />
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ password: target.value })}
          placeholder='Enter your password...'
          value={password}
          type='password'
        />
        <button
          className='btn btn-primary'
          disabled={email === '' || password === ''}
          type='submit'
        >
          Log in
        </button>
        <Link to="/signup">Don't have an account yet? Create an account here.</Link>
      </form>
    )
  }
}

const mapDispatchToProps = {
  loginUser
}

export default connect(null, mapDispatchToProps)(Login)
