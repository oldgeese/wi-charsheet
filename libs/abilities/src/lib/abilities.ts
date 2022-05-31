export interface Abilities {
  consumedExp: number
  exp: number
  fullCount: number
  capacity: number
  initialCapacity: number
  strength: number
  dexterity: number
  technique: number
  intelligence: number
  sensibility: number
  charisma: number
}
export function newAbilities(): Abilities {
  return {
    consumedExp: 0,
    exp: 0,
    fullCount: 0,
    capacity: 0,
    initialCapacity: 0,
    strength: 0,
    dexterity: 0,
    technique: 0,
    intelligence: 0,
    sensibility: 0,
    charisma: 0,
  }
}
