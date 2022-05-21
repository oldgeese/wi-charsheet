import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SpellsProps {}

const StyledSpells = styled.div`
  color: pink;
`;

export function Spells(props: SpellsProps) {
  return (
    <StyledSpells>
      <h1>Welcome to Spells!</h1>
    </StyledSpells>
  );
}

export default Spells;
