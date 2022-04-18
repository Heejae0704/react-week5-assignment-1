import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const onSelect = jest.fn();

  const categories = [
    { id: 1, name: '한식' },
  ];

  const renderCategories = (selectCategoryId) => render((
    <Categories
      categories={categories}
      onSelect={onSelect}
      selectCategoryId={selectCategoryId}
    />
  ));

  it('renders categories', () => {
    const { container } = renderCategories();

    expect(container).toHaveTextContent('한식');
  });

  it('listens for click event on select category', () => {
    const { getByText } = renderCategories();

    fireEvent.click(getByText('한식'));

    expect(onSelect).toBeCalledWith(1);
  });

  context('when selected', () => {
    it('renders name with (V)', () => {
      const { queryByText } = renderCategories();

      expect(queryByText('한식 (V)')).not.toBeNull();
    });
  });
});
