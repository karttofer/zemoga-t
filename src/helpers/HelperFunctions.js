/**
 * @param {date} date1 - This wil be the current date
 * @param {date} date2 - The date that we'll use to make the difference
 * @returns A message with the time that have been pased example: 14 hours ago.
 */
export const calcDate = (date1, date2) => {
  const diff = Math.floor(date1.getTime() - date2.getTime());
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  let message;

  if (days) message = `${days} days ago`;
  if (months) message = `${months} months ago`;
  if (years) message = `${years} years ago`;

  return message;
};

/**
 * @description This function will add a vote against or favor
 * @param {string} - Action Type
 * @param {object} - Redux State
 * @param {object} - Complete action with type and paylos from store
 * @returns Array of objects
 */
export const addVote = (type, state, action) =>
  state.items.map((data) => {
    if (data.name === action.payload.name) {
      data.votes[`${type}PrevState`] = data.votes[type];
      data.votes['voted'] = true;
      data.votes[type] += 5;
    }
    return data;
  });

/**
 * @description If the user wants to vote again this function will make rollback in the store
 * @param {string} - Action Type
 * @param {object} - Redux State
 * @param {object} - Complete action with type and paylos from store
 * @returns Array of objects
 */
export const voteAgain = (state, action) =>
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
