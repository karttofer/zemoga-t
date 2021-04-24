// Dependencies
import { createStore, combineReducers } from 'redux';

// Reducers
import { vote } from './reducers';

// Mock Data
import { mock } from '../commons/mockData/mock';

// Initial State
export const initialState = {
  items: mock,
};

// Combine reducers

// Store
export const store = createStore(
  vote /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
