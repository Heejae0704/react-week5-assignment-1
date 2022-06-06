import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { CATEGORIES, REGIONS } from './fixture';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: CATEGORIES,
    regions: REGIONS,
    categoryId: 0,
    region: '',
    restaurants: [],
  }));

  it('App', () => {
    render(<App />);
  });
});
