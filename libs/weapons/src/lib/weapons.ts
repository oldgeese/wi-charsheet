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
        id: "1",
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        id: "2",
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        id: "3",
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
      {
        id: "4",
        name: "",
        leftAbility: "",
        rightAbility: "",
        percent: 0,
      },
    ],
    evade: {
      id: "1",
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
    defence: {
      id: "1",
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
    spellResistance: {
      id: "1",
      leftAbility: "",
      rightAbility: "",
      percent: 0,
    },
  }
}
