import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const reducer = rootReducer();
const initialState = {};
const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
  return store;
}

export default configureStore;