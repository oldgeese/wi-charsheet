import { v4 as uuidv4 } from "uuid"

interface AbilitiesAndPercent {
  id: string
  leftAbility: string
  rightAbility: string
  percent: number
}

interface Weapon extends AbilitiesAndPercent {
  name: string
}

interface Evade extends AbilitiesAndPercent {}

interface Defence extends AbilitiesAndPercent {}

interface SpellResistance extends AbilitiesAndPercent {}

export interface Weapons {
  weapons: Weapon[]
  evade: Evade
  defence: Defence
  spellResistance: SpellResistance
}

export function newWeapons(): Weapons{
  return {
    weapons: [
      {
        id: uuidv4(),
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        id: uuidv4(),
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        id: uuidv4(),
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        id: uuidv4(),
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
    ],
    evade: {
      id: uuidv4(),
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
    defence: {
      id: uuidv4(),
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
    spellResistance: {
      id: uuidv4(),
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
  }
}
