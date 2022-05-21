export interface Bond {
  id: string
  name: string
  relation: string
  type: string
  used: boolean
}

export function newBonds(): Bond[] {
  return [
    {
      id: "1",
      name: "",
      relation: "",
      type: "",
      used: false,
    },
    {
      id: "2",
      name: "",
      relation: "",
      type: "",
      used: false,
    },
    {
      id: "3",
      name: "",
      relation: "",
      type: "",
      used: false,
    },
    {
      id: "4",
      name: "",
      relation: "",
      type: "",
      used: false,
    },
    {
      id: "5",
      name: "",
      relation: "",
      type: "",
      used: false,
    },
  ]
}
