// Dependencies
import { createStore } from 'redux';

// Reducers
import { vote } from './reducers';

// Mock Data
import { mock } from '../commons/mockData/mock';

// Initial State
export const initialState = {
  items: mock,
};

/**
 * @description If existe an prev state it will be loaded with this function.
 */
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

/**
 * @description This function will save all the redux state.
 * @param {object} state - Redux state
 */
const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem('store', serializedData);
  } catch (err) {
    console.error(err);
  }
};

// Store
const persistData = loadState();

// Craete the state
export const store = createStore(
  vote /* preloadedState, */,
  persistData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Save the stored state
store.subscribe(() => {
  saveState(store.getState());
});
