// Dependencies
import { createStore } from 'redux';

// Reducers
import { addElements } from './reducers';

// Initial State
export const initialState = {
  items: [],
};

// Store
export const store = createStore(
  addElements /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
