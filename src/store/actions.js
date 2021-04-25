// Actions to vote
export const vote = (typeOfVote, name) => ({
  type: typeOfVote,
  payload: {
    name,
  },
});
