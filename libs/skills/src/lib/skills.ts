export interface Skills {
  consumedExp: number
  skills: Skill[]
}

export interface Skill {
  id: string
  name: string
  value: number
}

export function newSkills(): Skills {
  return {
    consumedExp: 0,
    skills: [
      {
        id: "1",
        name: "",
        value: 0,
      },
      {
        id: "2",
        name: "",
        value: 0,
      },
      {
        id: "3",
        name: "",
        value: 0,
      },
      {
        id: "4",
        name: "",
        value: 0,
      },
      {
        id: "5",
        name: "",
        value: 0,
      },
      {
        id: "6",
        name: "",
        value: 0,
      },
      {
        id: "7",
        name: "",
        value: 0,
      },
      {
        id: "8",
        name: "",
        value: 0,
      },
      {
        id: "9",
        name: "",
        value: 0,
      },
      {
        id: "10",
        name: "",
        value: 0,
      },
      {
        id: "11",
        name: "",
        value: 0,
      },
      {
        id: "12",
        name: "",
        value: 0,
      },
      {
        id: "13",
        name: "",
        value: 0,
      },
      {
        id: "14",
        name: "",
        value: 0,
      },
      {
        id: "15",
        name: "",
        value: 0,
      },
    ]
  }
}
