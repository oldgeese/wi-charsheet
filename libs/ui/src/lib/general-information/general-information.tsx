import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GeneralInformationProps {}

const StyledGeneralInformation = styled.div`
  color: pink;
`;

export function GeneralInformation(props: GeneralInformationProps) {
  return (
    <StyledGeneralInformation>
      <h1>Welcome to General!</h1>
    </StyledGeneralInformation>
  );
}

export default GeneralInformation;
