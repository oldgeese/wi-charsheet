import { v4 as uuidv4 } from "uuid"

export interface Features {
  consumedExp: number
  features: Feature[]
}

export interface Feature {
  id: string
  name: string
  effect: string
  origin: string
}

export function newFeatures(): Features {
  return {
    consumedExp:0,
    features:[
      {
        id: uuidv4(),
        name: "",
        effect: "",
        origin: "種族",
      },
      {
        id: uuidv4(),
        name: "",
        effect: "",
        origin: "種族",
      },
      {
        id: uuidv4(),
        name: "",
        effect: "",
        origin: "取得",
      },
      {
        id: uuidv4(),
        name: "",
        effect: "",
        origin: "取得",
      },
      {
        id: uuidv4(),
        name: "",
        effect: "",
        origin: "取得",
      },
    ]
  }
}
