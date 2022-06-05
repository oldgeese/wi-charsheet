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
        id: "1",
        name: "",
        effect: "",
        origin: "種族",
      },
      {
        id: "2",
        name: "",
        effect: "",
        origin: "種族",
      },
      {
        id: "3",
        name: "",
        effect: "",
        origin: "取得",
      },
      {
        id: "4",
        name: "",
        effect: "",
        origin: "取得",
      },
      {
        id: "5",
        name: "",
        effect: "",
        origin: "取得",
      },
    ]
  }
}
