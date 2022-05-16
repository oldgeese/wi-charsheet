import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CharsheetProps {}

const StyledCharsheet = styled.div`
  color: pink;
`;

export function Charsheet(props: CharsheetProps) {
  return (
    <StyledCharsheet>
      <h1>Welcome to Charsheet!</h1>
    </StyledCharsheet>
  );
}

export default Charsheet;
