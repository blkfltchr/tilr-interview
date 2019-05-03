import actionTypes from '../actions/actionTypes'

const initialState = {
  loadingUsers: false,
  singleuser: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SINGLE_USER:
      return { ...state, loadingUsers: true }
    case actionTypes.GET_SINGLE_USER_SUCCESS:
      return { ...state, loadingUsers: false, singleuser: action.payload }
    default:
      return state
  }
}
