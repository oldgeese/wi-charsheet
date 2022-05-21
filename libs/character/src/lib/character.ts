import { GeneralInformation, newGeneralInformation } from '@wi-charsheet/general-information'
import { Abilities, newAbilities } from '@wi-charsheet/abilities'

export interface Character {
  generalInformation: GeneralInformation
  abilities: Abilities
}

export function newCharacter(): Character {
  return {
    generalInformation: newGeneralInformation(),
    abilities: newAbilities(),
  }
}
