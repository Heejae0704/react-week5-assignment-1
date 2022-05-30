import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import state from '../fixtures/state';
import App from './App';

describe('App', () => {
  it('renders regions list', () => {
    render(<App />);
    // screen.debug();
    screen.getAllByRole('button');
    // expect(state.regions.length).toHaveLength(screen.getAllByRole('button').length);
    expect(screen.getByText('서울')).toHaveValue(String(state.regions[0].id));
  });
  context('when the user clicks a region', () => {
    it('display region name with V sign in current region', async () => {
      render(<App />);
      const user = userEvent.setup();
      const seoul = screen.getByText('서울');
      await user.click(seoul);

      expect(seoul).toHaveTextContent('서울(V)');
    });
  });
});
