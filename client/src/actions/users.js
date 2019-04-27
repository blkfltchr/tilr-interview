import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const signupUser = (name, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/users', { 
        name, 
        password
     })
    dispatch({ type: actionTypes.SIGNUP_USER, payload: data })
    dispatch(push('/questions'))
  } catch (err) {
    console.log(err)
  }
}