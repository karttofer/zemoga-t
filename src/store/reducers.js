// Dependencies
import { initialState } from './initialState';
import {
  VOTE_FAVOR,
  VOTE_AGAINST,
  VOTE_AGAIN,
} from '../commons/constants/contants';

// Helpers
import { addVote, voteAgain } from '../helpers/HelperFunctions';

/**
 * @description This reducer will make a vote in favor or against or to vote again
 * @param {object} state - Redux state
 * @param {object} action - Action with type and payload example: {type: 'TYPE', payload:{...props}}
 * @returns A new state
 */
export const vote = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_FAVOR:
      return {
        ...state,
        items: addVote('positive', state, action),
      };
    case VOTE_AGAINST:
      return {
        ...state,
        items: addVote('negative', state, action),
      };
    case VOTE_AGAIN:
      return {
        ...state,
        items: voteAgain(state, action),
      };
    default:
      return state;
  }
};
