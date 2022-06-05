import { render } from '@testing-library/react';
import { newSpells } from "@wi-charsheet/spells";

import Spells from './spells';

describe('Spells', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spells spells={newSpells()}/>);
    expect(baseElement).toBeTruthy();
  });
});
