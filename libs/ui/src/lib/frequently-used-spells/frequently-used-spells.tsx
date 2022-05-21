import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrequentlyUsedSpellsProps {}

const StyledFrequentlyUsedSpells = styled.div`
  color: pink;
`;

export function FrequentlyUsedSpells(props: FrequentlyUsedSpellsProps) {
  return (
    <StyledFrequentlyUsedSpells>
      <h1>Welcome to FrequentlyUsedSpells!</h1>
    </StyledFrequentlyUsedSpells>
  );
}

export default FrequentlyUsedSpells;
