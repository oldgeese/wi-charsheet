import { Key } from "@wi-charsheet/key"

export interface GeneralInformation {
  plName: string
  pcName: string
  race: string
  age: Number
  gender: string
  shapeAndOriginOfCapacity: string
  reason: string
  appearance: string
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
    keys: [
      { id:'1', name: '', used: false },
      { id:'2', name: '', used: false },
      { id:'3', name: '', used: false },
    ]
  }
}
