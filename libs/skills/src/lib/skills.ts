import { v4 as uuidv4 } from "uuid"

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
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
      newSkill(),
    ]
  }
}

export function newSkill(): Skill {
  return {
    id: uuidv4(),
    name: "",
    value: 0,
  }
}
