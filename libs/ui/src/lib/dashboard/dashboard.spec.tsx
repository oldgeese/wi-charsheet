import { render } from '@testing-library/react';
import { newCharacter } from '@wi-charsheet/character';

import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dashboard characters={[newCharacter()]}/>);
    expect(baseElement).toBeTruthy();
  });
});
