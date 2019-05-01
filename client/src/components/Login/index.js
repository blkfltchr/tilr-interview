import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/users'
import '../Questions/style.css'

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
      <form onSubmit={event => this.loginUser(event)}> 
        <h3>Log in</h3>
        <div className='form-group'>
          <input
            className='form-control'
            onChange={({ target }) => this.setState({ email: target.value })}
            placeholder='Enter your email...'
            value={email}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            onChange={({ target }) => this.setState({ password: target.value })}
            placeholder='Enter your password...'
            value={password}
            type='password'
          />
        </div>
        <div className='form-group'>
          <button
            className='btn btn-primary'
            disabled={email === '' || password === ''}
            type='submit'
          >
            Log in
          </button>
        </div>
        <div className='form-group'>
          <a href='http:localhost:8000/auth/google'>
            <button className="loginBtn loginBtn--google">
              Log in with Google
            </button>
          </a>
        </div>
        <div className='form-group'>
          <Link to='/signup'>Don't have an account yet? Create an account here.</Link>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  loginUser
}

export default connect(null, mapDispatchToProps)(Login)
