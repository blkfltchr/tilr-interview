import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import { connectRouter } from 'connected-react-router'

const reducers = history => combineReducers({
  questions,
  users,
  router: connectRouter(history)
})

export default reducers
