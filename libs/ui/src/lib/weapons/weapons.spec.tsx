import { render } from '@testing-library/react';
import { newWeapons } from "@wi-charsheet/weapons";

import Weapons from './weapons';

describe('Weapons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Weapons weapons={newWeapons()}/>);
    expect(baseElement).toBeTruthy();
  });
});
