import { render } from '@testing-library/react';
import { newAbilities } from '@wi-charsheet/abilities';

import Abilities from './abilities';

describe('Abilities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Abilities abilities={newAbilities()}/>);
    expect(baseElement).toBeTruthy();
  });
});
