import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import QuestionList from './QuestionList'
import QuestionForm from './QuestionForm'
import './style.css'

const Questions = () => (
  <div className='questions'>
    <div className='questions__sticky'>
      <h1 className='text-center'>tilr Interview</h1>
      <ul className='nav nav-pills questions__nav'>
        <li className='nav-item'><NavLink to='/questions' className='nav-link' exact>Questions</NavLink></li>
        <li className='nav-item'><NavLink to='/questions/create' className='nav-link'>Create</NavLink></li>
        <li className='nav-item'><NavLink to='/login' className='nav-link'>Login</NavLink></li>
        <li className='nav-item'><NavLink to='/signup' className='nav-link'>Sign up</NavLink></li>
      </ul>
    </div>
    <Switch>
      <Route path='/questions' component={QuestionList} exact />
      <Route path='/questions/create' component={QuestionForm} />
    </Switch>
  </div>
)

export default Questions
