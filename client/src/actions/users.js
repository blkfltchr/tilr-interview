import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const signupUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/auth/register', { 
        email, 
        password
     })
    dispatch({ type: actionTypes.SIGNUP_USER, payload: data })
    dispatch(push('/questions'))
  } catch (err) {
    console.log(err)
  }
}

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/auth/login', { 
        email, 
        password
     })
    dispatch({ type: actionTypes.LOGIN_USER, payload: data })
    dispatch(push('/questions'))
  } catch (err) {
    console.log(err)
  }
}