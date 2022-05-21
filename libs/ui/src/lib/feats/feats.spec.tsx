import { render } from '@testing-library/react';

import Feats from './feats';

describe('Feats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feats />);
    expect(baseElement).toBeTruthy();
  });
});
