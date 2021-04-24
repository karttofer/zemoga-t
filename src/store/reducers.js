// Dependencies
import { initialState } from './initialState';
import { VOTE_FAVOR, VOTE_AGAINST } from '../commons/constants/contants';

// Votes
export const vote = (state = initialState, action) => {
  const addVote = (type) =>
    state.items.map((data) => {
      if (data.name === action.payload.name) {
        data.votes[type] += 1;
      }
      return data;
    });

  switch (action.type) {
    case VOTE_FAVOR:
      return {
        ...state,
        items: addVote('positive'),
      };
      break;
    case VOTE_AGAINST:
      addVote('negative');
      return {
        ...state,
        items: addVote('negative'),
      };
      break;
    default:
      return state;
  }
};
