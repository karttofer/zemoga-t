import * as helpers from './HelperFunctions';

it('calcDate function should return correct values', () => {
  const mockResult = '1 years ago';
  const currentDate = new Date();
  const mockDate = new Date('2020-04-10T23:08:57.892Z');

  expect(helpers.calcDate(currentDate, mockDate)).toBe(mockResult);
});

it('vote should add correct positive value to Mark and add correct new props', () => {
  const mockState = {
    items: [
      {
        name: 'Mark',
        votes: {
          positive: 5,
          negative: 0,
        },
      },
    ],
  };

  expect(
    helpers.addVote('positive', mockState, {
      type: 'VOTE_FAVOR',
      payload: {
        name: 'Mark',
      },
    })
  ).toEqual([
    {
      name: 'Mark',
      votes: { positive: 10, negative: 0, positivePrevState: 5, voted: true },
    },
  ]);
});

it('vote should add correct negative value to Mark with more characters', () => {
  const mockState = {
    items: [
      {
        name: 'Juan',
        votes: {
          positive: 5,
          negative: 0,
        },
      },
      {
        name: 'Mark',
        votes: {
          positive: 5,
          negative: 0,
        },
      },
      {
        name: 'Pedro',
        votes: {
          positive: 5,
          negative: 0,
        },
      },
    ],
  };

  expect(
    helpers.addVote('negative', mockState, {
      type: 'VOTE_AGAINST',
      payload: {
        name: 'Mark',
      },
    })
  ).toEqual([
    {
      name: 'Juan',
      votes: {
        positive: 5,
        negative: 0,
      },
    },
    {
      name: 'Mark',
      votes: { positive: 5, negative: 5, negativePrevState: 0, voted: true },
    },
    {
      name: 'Pedro',
      votes: {
        positive: 5,
        negative: 0,
      },
    },
  ]);
});

it('vote again should reset the props inside of the character votes', () => {
  const mockState = {
    items: [
      {
        name: 'Mark',
        votes: {
          positive: 5,
          negative: 20,
          negativePrevState: 36,
          voted: true,
        },
      },
    ],
  };

  expect(
    helpers.voteAgain(mockState, {
      type: 'VOTE_AGAIN',
      payload: { name: 'Mark' },
    })
  ).toEqual([{ name: 'Mark', votes: { positive: 5, negative: 36 } }]);
});
