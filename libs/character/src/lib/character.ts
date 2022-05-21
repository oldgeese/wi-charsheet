import { GeneralInformation, newGeneralInformation } from '@wi-charsheet/general-information'

export interface Character {
  generalInformation: GeneralInformation,
}

export function newCharacter(): Character {
  return {
    generalInformation: newGeneralInformation()
  }
}
