import { render } from '@testing-library/react';

import Spells from './spells';

describe('Spells', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spells />);
    expect(baseElement).toBeTruthy();
  });
});
