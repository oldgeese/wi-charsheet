import { render } from '@testing-library/react';

import Editchar from './editchar';

describe('Editchar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Editchar />);
    expect(baseElement).toBeTruthy();
  });
});
