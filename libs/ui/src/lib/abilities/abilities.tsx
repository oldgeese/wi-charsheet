import styled from 'styled-components';
import { Abilities as Data } from '@wi-charsheet/abilities'

export interface AbilitiesProps {
  abilities: Data
}

const StyledAbilities = styled.div` `

export function Abilities(props: AbilitiesProps) {
  const p = props.abilities
  return (
    <StyledAbilities>
      <div>経験点:{p.comsumedExp.toString()}</div>
      <div>保有経験点:{p.exp.toString()}</div>
      <div>フルカウント:{p.fullCount.toString()}</div>
      <div>器:{p.capacity.toString()}</div>
      <div>初期値:{p.initialCapacity.toString()}</div>
      <div>筋力:{p.strength.toString()}</div>
      <div>敏捷:{p.dexterity.toString()}</div>
      <div>技術:{p.technique.toString()}</div>
      <div>知力:{p.intelligence.toString()}</div>
      <div>感性:{p.sensibility.toString()}</div>
      <div>魅力:{p.charisma.toString()}</div>
    </StyledAbilities>
  )
}

export default Abilities
