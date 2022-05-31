import { render } from '@testing-library/react';
import { newBonds } from '@wi-charsheet/bonds';

import Bonds from './bonds';

describe('Bonds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bonds bonds={newBonds()}/>);
    expect(baseElement).toBeTruthy();
  });
});
