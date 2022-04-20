import { render } from '@testing-library/react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regionList: [],
  }));

  const { queryByText } = render(
    <App />,
  );
  expect(dispatch).toBeCalled();

  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();
});
