import { v4 as uuidv4 } from "uuid"

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
      newSpell(),
      newSpell(),
      newSpell(),
      newSpell(),
      newSpell(),
      newSpell(),
    ]
  }
}

export function newSpell(): Spell {
  return {
    id: uuidv4(),
    check: 0,
    effect: "",
    attribute: "",
    keyword: "",
    motion: "",
    item: "",
  }
}
