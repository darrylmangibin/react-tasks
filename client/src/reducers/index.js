import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import filterReducer from './filterReducer';

const rootReducer = () => {
  return combineReducers({
    tasks: tasksReducer,
    filter: filterReducer
  })
}

export default rootReducer;