import { render } from '@testing-library/react';

import Abilities from './abilities';

describe('Abilities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Abilities />);
    expect(baseElement).toBeTruthy();
  });
});
