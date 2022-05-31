export interface Feats {
  consumedExp: number
  feats: Feat[]
}
export interface Feat {
  id: string
  name: string
  effect: string
  condition: string
}

export function newFeats(): Feats {
  return {
    consumedExp:0,
    feats:[
      {
        id: "1",
        name: "",
        effect: "",
        condition: "",
      },
      {
        id: "2",
        name: "",
        effect: "",
        condition: "",
      },
      {
        id: "3",
        name: "",
        effect: "",
        condition: "",
      },
      {
        id: "4",
        name: "",
        effect: "",
        condition: "",
      },
      {
        id: "5",
        name: "",
        effect: "",
        condition: "",
      },
    ]
  }
}
