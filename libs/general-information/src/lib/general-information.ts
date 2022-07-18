import { Key } from "@wi-charsheet/key"
import { v4 as uuidv4 } from "uuid"

export interface GeneralInformation {
  plName: string
  pcName: string
  race: string
  age: number
  gender: string
  shapeAndOriginOfCapacity: string
  reason: string
  appearance: string
  imageUrl: string
  keys: Key[]
}

export function newGeneralInformation(): GeneralInformation {
  return {
    plName: "",
    pcName: "",
    race: "",
    age: 0,
    gender: "",
    shapeAndOriginOfCapacity: '',
    reason: '',
    appearance: '',
    imageUrl: '',
    keys: [
      { id: uuidv4(), name: '', used: false },
      { id: uuidv4(), name: '', used: false },
      { id: uuidv4(), name: '', used: false },
    ]
  }
}
