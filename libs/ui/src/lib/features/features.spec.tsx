import { render } from '@testing-library/react';
import { newFeatures } from '@wi-charsheet/features';

import Features from './features';

describe('Features', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Features features={newFeatures()}/>);
    expect(baseElement).toBeTruthy();
  });
});
