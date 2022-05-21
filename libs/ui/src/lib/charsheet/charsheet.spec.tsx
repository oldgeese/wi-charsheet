import { render } from '@testing-library/react';
import { newCharacter } from '@wi-charsheet/character';

import Charsheet from './charsheet';

describe('Charsheet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Charsheet character={newCharacter()}/>);
    expect(baseElement).toBeTruthy();
  });
});
