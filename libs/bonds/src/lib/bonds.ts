import { v4 as uuidv4 } from "uuid"

export interface Bond {
  id: string
  name: string
  relation: string
  type: string
  used: boolean
}

export function newBonds(): Bond[] {
  return [
    newBond(),
    newBond(),
    newBond(),
    newBond(),
    newBond(),
  ]
}

export function newBond(): Bond {
  return {
    id: uuidv4(),
    name: "",
    relation: "",
    type: "",
    used: false,
  }
}
