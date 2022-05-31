import { render } from '@testing-library/react';
import { newFeats } from '@wi-charsheet/feats';

import Feats from './feats';

describe('Feats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feats feats={newFeats()}/>);
    expect(baseElement).toBeTruthy();
  });
});
