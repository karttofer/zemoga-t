// Dependencies
import { initialState } from './initialState';
import {
  VOTE_FAVOR,
  VOTE_AGAINST,
  VOTE_AGAIN,
} from '../commons/constants/contants';

/**
 * @description This reducer will make a vote in favor or against or to vote again
 * @param {object} state - Redux state
 * @param {object} action - Action with type and payload example: {type: 'TYPE', payload:{...props}}
 * @returns A new state
 */
export const vote = (state = initialState, action) => {
  // Function to make add or rest votes
  const addVote = (type) =>
    state.items.map((data) => {
      if (data.name === action.payload.name) {
        data.votes[`${type}PrevState`] = data.votes[type];
        data.votes['voted'] = true;
        data.votes[type] += 5;
      }
      return data;
    });

  // If the user want to vote again
  const voteAgain = () =>
    state.items.map((data) => {
      if (data.name === action.payload.name) {
        const newObj = {
          positive: data.votes.positive,
          negative: data.votes.negative,
        };

        const getType = Object.keys(data.votes)
          .filter((e) => e.includes('PrevState'))
          .join('');

        if (data.votes[getType]) {
          if (getType.includes('positive')) {
            newObj.positive = data.votes[getType];
          } else {
            newObj.negative = data.votes[getType];
          }
        }

        data.votes = Object.assign({}, newObj);
      }
      return data;
    });

  switch (action.type) {
    case VOTE_FAVOR:
      return {
        ...state,
        items: addVote('positive'),
      };
    case VOTE_AGAINST:
      return {
        ...state,
        items: addVote('negative'),
      };
    case VOTE_AGAIN:
      voteAgain();
      return {
        ...state,
        items: voteAgain(),
      };
    default:
      return state;
  }
};
