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

    return (
      <form> 
        <h3>Log in</h3>
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
