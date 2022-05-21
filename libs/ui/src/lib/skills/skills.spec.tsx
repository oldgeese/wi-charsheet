import { render } from '@testing-library/react';

import Skills from './skills';

describe('Skills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Skills />);
    expect(baseElement).toBeTruthy();
  });
});
