import { v4 as uuidv4 } from "uuid"

export interface FrequentlyUsedSpell {
  id: string,
  modifiedCheck: number
  effect: string
  attribute: string
  keyword: string
  motion: string
  item: string
  extension: string
}

export function newFrequentlyUsedSpells(): FrequentlyUsedSpell[] {
  return [
    {
      id: uuidv4(),
      modifiedCheck: 0,
      effect: "",
      attribute: "",
      keyword: "",
      motion: "",
      item: "",
      extension: "",
    },
    {
      id: uuidv4(),
      modifiedCheck: 0,
      effect: "",
      attribute: "",
      keyword: "",
      motion: "",
      item: "",
      extension: "",
    },
  ]
}
