import { render } from '@testing-library/react';

import Weapons from './weapons';

describe('Weapons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Weapons />);
    expect(baseElement).toBeTruthy();
  });
});
