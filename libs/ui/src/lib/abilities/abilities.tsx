import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AbilitiesProps {}

const StyledAbilities = styled.div`
  color: pink;
`;

export function Abilities(props: AbilitiesProps) {
  return (
    <StyledAbilities>
      <h1>Welcome to Abilities!</h1>
    </StyledAbilities>
  );
}

export default Abilities;
