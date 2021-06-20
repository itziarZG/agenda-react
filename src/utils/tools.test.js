import { groupByDate } from './tools';

const ungrouped = [
  {
    name: 'Evento 2',
    date: '2021-04-29',
  },
  {
    name: 'Evento 4',
    date: '2022-03-02',
  },
  {
    name: 'Evento 1',
    date: '2021-03-02',
  },
  {
    name: 'Evento 3',
    date: '2021-04-29',
  },
];

const grouped = {
  '2021-04-29': [
    {
      name: 'Evento 2',
      date: '2021-04-29',
    },
    {
      name: 'Evento 3',
      date: '2021-04-29',
    },
  ],
  '2022-03-02': [
    {
      name: 'Evento 4',
      date: '2022-03-02',
    },
  ],
  '2021-03-02': [
    {
      name: 'Evento 1',
      date: '2021-03-02',
    },
  ],
};

describe('groupByDate', () => {
  test('it groups objects by date', () => {
    const want = grouped;
    const got = groupByDate(ungrouped);

    expect(got).toEqual(want);
  });
});
