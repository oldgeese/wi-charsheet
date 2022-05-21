import { render } from '@testing-library/react';
import { newGeneralInformation } from '@wi-charsheet/general-information';
import GeneralInformation from './general-information';

describe('GeneralInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeneralInformation generalInformation={newGeneralInformation()}/>);
    expect(baseElement).toBeTruthy();
  });
});
