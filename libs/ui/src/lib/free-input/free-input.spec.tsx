import { render } from '@testing-library/react';

import FreeInput from './free-input';

describe('FreeInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FreeInput freeInput='test string'/>);
    expect(baseElement).toBeTruthy();
  });
});
