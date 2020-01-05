import { LOADING, GET_DATA, ADD_DATA, GET_ERROR, CLEAR_ERROR, REMOVE_DATA, EDIT_DATA } from '../actions/types';

const initialState = {
  tasks: [],
  loading: false,
  error: undefined
};

const tasksReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DATA:
      return {
        ...state,
        tasks: payload,
        loading: false
      }
    case ADD_DATA:
      return {
        ...state,
        tasks: [ ...state.tasks, payload ]
      }
    case GET_ERROR:
      return {
        ...state,
        error: payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: undefined
      }
    case REMOVE_DATA:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== payload._id)
      }
    case EDIT_DATA:
      const { tasks } = state;
      const index = tasks.findIndex(task => task._id === payload._id);
      const task = { ...tasks[index], ...payload };
      tasks[index] = task;
      return {
        ...state,
        tasks: [ ...tasks ]
      }
    default:
      return state
  }
}

export default tasksReducer;