import styled from 'styled-components'

import { Character } from '@wi-charsheet/character'

export interface CharsheetProps {
  character: Character
}

const StyledCharsheet = styled.div`
`;

export function Charsheet(props: CharsheetProps) {
  return (
    <StyledCharsheet>
      <h1>Welcome to Charsheet!</h1>
      <ul>
        <li>{props.character.plName}</li>
        <li>{props.character.pcName}</li>
      </ul>
    </StyledCharsheet>
  );
}

export default Charsheet;
