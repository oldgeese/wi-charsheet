import Grid from '@mui/material/Grid'
import { Character } from '@wi-charsheet/character'
import { Abilities, Bonds, Feats, Features, FreeInput, FrequentlyUsedSpells, GeneralInformation, Skills, Spells, Weapons } from '@wi-charsheet/ui'

export interface CharsheetProps {
  character: Character | undefined
}

export function Charsheet(props: CharsheetProps) {
  const p = props.character
  if (!p) { return <></> }
  return (
    <Grid container spacing={4}>
      <GeneralInformation generalInformation={p.generalInformation}/>
      <Abilities abilities={p.abilities}/>
      <Bonds bonds={p.bonds}/>
      <Features features={p.features}/>
      <Feats feats={p.feats}/>
      <Weapons weapons={p.weapons}/>
      <Skills skills={p.skills}/>
      <Spells spells={p.spells}/>
      <FrequentlyUsedSpells frequentlyUsedSpells={p.frequentlyUsedSpells}/>
      <FreeInput freeInput={p.freeInput}/>
    </Grid>
  );
}

export default Charsheet;
