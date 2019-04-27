import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/users'

class Signup extends Component {
  constructor() {
    super()
    this.state = { 
      name: '',
      password: ''  
    }
  }

  signupUser(event) {
    const { name, password } = this.state
    event.preventDefault()
    this.props.signupUser(name, password)
  }

  render() {
    const { name, password } = this.state

    return (
      <form onSubmit={event => this.signupUser(event)} className='question-form'>
        <h3>Sign up</h3>
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ name: target.value })}
          placeholder='Enter your name...'
          value={name}
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
          disabled={name === '' || password === ''}
          type='submit'
        >
          Sign up
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  signupUser
}

export default connect(null, mapDispatchToProps)(Signup)
