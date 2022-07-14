import { render } from '@testing-library/react';

import Viewchar from './viewchar';

describe('Viewchar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Viewchar />);
    expect(baseElement).toBeTruthy();
  });
});
