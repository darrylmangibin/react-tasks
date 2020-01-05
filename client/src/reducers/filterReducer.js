import { FILTER_DATA, HIDE_COMPLETED } from '../actions/types';

const initalState = {
  text: '',
  hideCompleted: false
}

const filterReducer = (state = initalState, { type, payload }) => {
  switch(type) {
    case FILTER_DATA:
      return {
        ...state,
        text: payload
      }
    case HIDE_COMPLETED:
      return {
        ...state,
        hideCompleted: payload
      }
    default:
      return state
  }
}

export default filterReducer;