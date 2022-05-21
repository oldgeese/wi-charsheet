import { render } from '@testing-library/react';

import FrequentlyUsedSpells from './frequently-used-spells';

describe('FrequentlyUsedSpells', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrequentlyUsedSpells />);
    expect(baseElement).toBeTruthy();
  });
});
