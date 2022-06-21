import { v4 as uuidv4 } from "uuid"

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
      newFeat(),
      newFeat(),
      newFeat(),
      newFeat(),
      newFeat(),
    ]
  }
}

export function newFeat(): Feat {
  return {
    id: uuidv4(),
    name: "",
    effect: "",
    condition: "",
  }
}
