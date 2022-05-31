interface AbilitiesAndPercent {
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
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
    ],
    evade: {
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
    defence: {
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
    spellResistance: {
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
  }
}
