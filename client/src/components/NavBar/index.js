import React from 'react'

const NavBar = () => (
  <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
    <div className='container'>
      <a className='navbar-brand' href='/'>tilr Interview</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <a className='nav-item nav-link active' href='/'>Home <span className='sr-only'>(current)</span></a>
          <a className='nav-item nav-link' href='/questions'>Questions</a>
          <a className='nav-item nav-link' href='/questions/create'>Create</a>
          <a className='nav-item nav-link' href='/login'>Login</a>
          <a className='nav-item nav-link' href='/signup'>Sign up</a>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
