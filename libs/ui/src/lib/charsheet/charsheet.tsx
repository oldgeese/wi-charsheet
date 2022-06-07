import { Character } from '@wi-charsheet/character'
import { Abilities, Bonds, Feats, Features, FrequentlyUsedSpells, GeneralInformation, Skills, Spells, Weapons } from '@wi-charsheet/ui'
import styled from 'styled-components'

export interface CharsheetProps {
  character: Character
}

const StyledCharsheet = styled.div`
`;

export function Charsheet(props: CharsheetProps) {
  const p = props.character
  return (
    <StyledCharsheet>
      <GeneralInformation generalInformation={p.generalInformation}/>
      <Abilities abilities={p.abilities}/>
      <Bonds bonds={p.bonds}/>
      <Features features={p.features}/>
      <Feats feats={p.feats}/>
      <Weapons weapons={p.weapons}/>
      <Skills skills={p.skills}/>
      <Spells spells={p.spells}/>
      <FrequentlyUsedSpells frequentlyUsedSpells={p.frequentlyUsedSpells}/>
    </StyledCharsheet>
  );
}

export default Charsheet;
