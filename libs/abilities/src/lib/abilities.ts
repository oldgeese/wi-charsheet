export interface Abilities {
  comsumedExp: Number
  exp: Number
  fullCount: Number
  capacity: Number
  initialCapacity: Number
  strength: Number
  dexterity: Number
  technique: Number
  intelligence: Number
  sensibility: Number
  charisma: Number
}
export function newAbilities(): Abilities {
  return {
    comsumedExp: 0,
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
