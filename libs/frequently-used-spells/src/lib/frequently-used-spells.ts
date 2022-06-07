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
      id: "1",
      modifiedCheck: 0,
      effect: "",
      attribute: "",
      keyword: "",
      motion: "",
      item: "",
      extension: "",
    },
    {
      id: "2",
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
