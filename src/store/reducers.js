// Dependencies
import { initialState } from './initialState';
import { ADD_ITEMS } from '../commons/constants/contants';

// Add the elements to the store
export const addElements = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
