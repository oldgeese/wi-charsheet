import { render } from '@testing-library/react';
import { newFrequentlyUsedSpells } from "@wi-charsheet/frequently-used-spells";
import FrequentlyUsedSpells from './frequently-used-spells';

describe('FrequentlyUsedSpells', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrequentlyUsedSpells frequentlyUsedSpells={newFrequentlyUsedSpells()}/>);
    expect(baseElement).toBeTruthy();
  });
});
