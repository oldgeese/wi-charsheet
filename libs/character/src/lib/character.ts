import { Abilities, newAbilities } from '@wi-charsheet/abilities'
import { Bond, newBonds } from '@wi-charsheet/bonds'
import { Features, newFeatures } from '@wi-charsheet/features'
import { Feats, newFeats } from '@wi-charsheet/feats'
import { Weapons, newWeapons } from '@wi-charsheet/weapons'
import { GeneralInformation, newGeneralInformation } from '@wi-charsheet/general-information'

export interface Character {
  generalInformation: GeneralInformation
  abilities: Abilities
  bonds: Bond[]
  features: Features
  feats: Feats
  weapons: Weapons
}

export function newCharacter(): Character {
  return {
    generalInformation: newGeneralInformation(),
    abilities: newAbilities(),
    bonds: newBonds(),
    features: newFeatures(),
    feats: newFeats(),
    weapons: newWeapons(),
  }
}
