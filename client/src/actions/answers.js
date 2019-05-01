import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const fetchAnswers = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/answers')
    dispatch({ type: actionTypes.QUESTIONS_FETCH_ALL, payload: data.reverse() })
  } catch (err) {
    console.log(err)
  }
}

export const answerQuestion = text => async (dispatch) => {
  try {
    const { data } = await axios.post('/answers', { text })
    dispatch({ type: actionTypes.QUESTIONS_CREATE, payload: data })
    dispatch(push('/questions'))
  } catch (err) {
    console.log(err)
  }
}