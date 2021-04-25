// Actions to vote favor
export const vote = (typeOfVote, name) => ({
  type: typeOfVote,
  payload: {
    name,
  },
});
