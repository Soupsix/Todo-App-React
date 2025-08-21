import { createStore } from 'redux';
import todoReducer from './reducers';

const store = createStore(
  todoReducer,
  // Redux DevTools Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;