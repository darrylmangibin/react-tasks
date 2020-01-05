import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

const rootReducer = () => {
  return combineReducers({
    tasks: tasksReducer
  })
}

export default rootReducer;