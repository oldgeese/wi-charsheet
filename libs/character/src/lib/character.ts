import { Abilities, newAbilities } from '@wi-charsheet/abilities'
import { Bond, newBonds } from '@wi-charsheet/bonds'
import { GeneralInformation, newGeneralInformation } from '@wi-charsheet/general-information'

export interface Character {
  generalInformation: GeneralInformation
  abilities: Abilities
  bonds: Bond[]
}

export function newCharacter(): Character {
  return {
    generalInformation: newGeneralInformation(),
    abilities: newAbilities(),
    bonds: newBonds(),
  }
}
