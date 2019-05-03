import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const signupUser = (email, password) => {
  return (dispatch, getState) => {
    dispatch({type: actionTypes.SIGNING_UP});

    axios.post('/auth/register', { email, password })
      .then(
        response => dispatch({ type: actionTypes.SIGNUP_SUCESS, payload: response })
      )
      .then(
        response => localStorage.setItem("user_id", response.payload.data.id)
      )
      .then(dispatch(push('/questions')))
      .catch((err) => console.log(err))
  }
}

export const loginUser = (email, password) => { 
  return (dispatch, getState) => {
    dispatch({type: actionTypes.LOGGING_IN});

    axios.post('/auth/login', { email, password })
      .then(
        response => dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response })
      )
      .then(
        response => localStorage.setItem("user_id", response.payload.data.id)
      )
      .then(dispatch(push('/questions')))
      .catch((err) => console.log(err))
  }
}