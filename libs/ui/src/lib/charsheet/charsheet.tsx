import { Character } from '@wi-charsheet/character'
import { Abilities, Bonds, Feats, Features, FrequentlyUsedSpells, GeneralInformation, Skills, Spells, Weapons } from '@wi-charsheet/ui'
import styled from 'styled-components'

export interface CharsheetProps {
  character: Character
}

const StyledCharsheet = styled.div`
`;

export function Charsheet(props: CharsheetProps) {
  return (
    <StyledCharsheet>
      <GeneralInformation generalInformation={props.character.generalInformation}/>
      <Abilities />
      <Bonds />
      <Features />
      <Feats />
      <Weapons />
      <Skills />
      <Spells />
      <FrequentlyUsedSpells />
    </StyledCharsheet>
  );
}

export default Charsheet;
