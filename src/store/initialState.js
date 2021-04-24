// Dependencies
import { createStore } from 'redux';

// Reducers
import { addElements } from './reducers';

// Mock Data
import { mock } from '../commons/mockData/mock';

// Initial State
export const initialState = {
  items: mock,
};

// Store
export const store = createStore(
  addElements /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
