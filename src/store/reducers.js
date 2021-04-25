// Dependencies
import { initialState } from './initialState';
import {
  VOTE_FAVOR,
  VOTE_AGAINST,
  VOTE_AGAIN,
} from '../commons/constants/contants';

// Votes
export const vote = (state = initialState, action) => {
  const addVote = (type) =>
    state.items.map((data) => {
      if (data.name === action.payload.name) {
        data.votes[`${type}PrevState`] = data.votes[type];
        data.votes['voted'] = true;
        data.votes[type] += 5;
      }
      return data;
    });

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
      break;
    case VOTE_AGAINST:
      return {
        ...state,
        items: addVote('negative'),
      };
      break;
    case VOTE_AGAIN:
      voteAgain();
      return {
        ...state,
        items: voteAgain(),
      };
      break;
    default:
      return state;
  }
};
