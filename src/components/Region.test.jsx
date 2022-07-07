import { render } from '@testing-library/react';

import Region from './Region';

import REGIONS from '../fixtures/regions';

describe('<Region />', () => {
  const renderRegion = (region) => render((<Region region={region} />));

  it('render region name', () => {
    const region = REGIONS[0];

    const { container } = renderRegion(region);

    expect(container).toHaveTextContent(region.name);
  });
});
