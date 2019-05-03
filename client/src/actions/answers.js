import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

const  user_id = localStorage.getItem('user_id')

export const fetchAnswers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/answers/${user_id}`)
    dispatch({ type: actionTypes.ANSWERS_FETCH_ALL, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}

export const answerQuestion = text => async (dispatch) => {
  try {
    const { data } = await axios.post(`/answers/${user_id}`, { text })
    dispatch({ type: actionTypes.ANSWER_QUESTION, payload: data })
    dispatch(push('/answers'))
  } catch (err) {
    console.log(err)
  }
}