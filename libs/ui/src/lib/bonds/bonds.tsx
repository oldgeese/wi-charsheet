import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BondsProps {}

const StyledBonds = styled.div`
  color: pink;
`;

export function Bonds(props: BondsProps) {
  return (
    <StyledBonds>
      <h1>Welcome to Bonds!</h1>
    </StyledBonds>
  );
}

export default Bonds;
