import { render } from '@testing-library/react';

import Newchar from './newchar';

describe('Newchar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Newchar />);
    expect(baseElement).toBeTruthy();
  });
});
