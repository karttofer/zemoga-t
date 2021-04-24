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

// Persist data
const loadState = () => {
  try {
    const serializedData = localStorage.getItem('store');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem('store', serializedData);
  } catch (err) {
    // ignore write errors
  }
};

// Store
const persistData = loadState();

export const store = createStore(
  vote /* preloadedState, */,
  persistData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});
