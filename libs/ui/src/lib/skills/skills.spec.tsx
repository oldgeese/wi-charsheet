import { render } from '@testing-library/react';
import { newSkills } from "@wi-charsheet/skills";

import Skills from './skills';

describe('Skills', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Skills skills={newSkills()}/>);
    expect(baseElement).toBeTruthy();
  });
});
