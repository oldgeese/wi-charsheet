import { render } from '@testing-library/react';

import GeneralInformation from './general-information';

describe('GeneralInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeneralInformation />);
    expect(baseElement).toBeTruthy();
  });
});
