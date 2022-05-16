import { render } from '@testing-library/react';

import Charsheet from './charsheet';

describe('Charsheet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Charsheet />);
    expect(baseElement).toBeTruthy();
  });
});
