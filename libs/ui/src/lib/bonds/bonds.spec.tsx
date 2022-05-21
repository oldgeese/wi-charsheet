import { render } from '@testing-library/react';

import Bonds from './bonds';

describe('Bonds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bonds />);
    expect(baseElement).toBeTruthy();
  });
});
