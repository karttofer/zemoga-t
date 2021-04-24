// Dependencies
import * as constants from '../commons/constants/contants';

// Action to add the elements
export const addElement = {
  type: constants.ADD_ITEMS,
  payload: {
    items: [],
  },
};

// Actions to vote favor
export const voteFavor = (typeOfVote, name) => ({
  type: typeOfVote,
  payload: {
    name,
  },
});
