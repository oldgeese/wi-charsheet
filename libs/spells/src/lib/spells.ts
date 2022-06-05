export interface Spells {
  leftAbility: string
  rightAbility: string
  percent: number
  consumedExp: number
  spells: Spell[]
}

export interface Spell {
  id: string
  check: number
  effect: string
  attribute: string
  keyword: string
  motion: string
  item: string
}

export function newSpells(): Spells {
  return {
    leftAbility: "",
    rightAbility: "",
    percent: 0,
    consumedExp:0,
    spells:[
      {
        id: "1",
        check: 0,
        effect: "",
        attribute: "",
        keyword: "",
        motion: "",
        item: "",
      },
      {
        id: "2",
        check: 0,
        effect: "",
        attribute: "",
        keyword: "",
        motion: "",
        item: "",
      },
      {
        id: "3",
        check: 0,
        effect: "",
        attribute: "",
        keyword: "",
        motion: "",
        item: "",
      },
      {
        id: "4",
        check: 0,
        effect: "",
        attribute: "",
        keyword: "",
        motion: "",
        item: "",
      },
      {
        id: "5",
        check: 0,
        effect: "",
        attribute: "",
        keyword: "",
        motion: "",
        item: "",
      },
      {
        id: "6",
        check: 0,
        effect: "",
        attribute: "",
        keyword: "",
        motion: "",
        item: "",
      },
    ]
  }
}
