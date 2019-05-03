import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import answers from './answers'
import { connectRouter } from 'connected-react-router'

const reducers = history => combineReducers({
  questions,
  users,
  answers,
  router: connectRouter(history)
})

export default reducers
