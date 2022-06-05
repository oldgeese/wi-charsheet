import { Abilities, newAbilities } from '@wi-charsheet/abilities'
import { Bond, newBonds } from '@wi-charsheet/bonds'
import { Features, newFeatures } from '@wi-charsheet/features'
import { Feats, newFeats } from '@wi-charsheet/feats'
import { Weapons, newWeapons } from '@wi-charsheet/weapons'
import { Skills, newSkills } from '@wi-charsheet/skills'
import { Spells, newSpells } from '@wi-charsheet/spells'
import { GeneralInformation, newGeneralInformation } from '@wi-charsheet/general-information'

export interface Character {
  generalInformation: GeneralInformation
  abilities: Abilities
  bonds: Bond[]
  features: Features
  feats: Feats
  weapons: Weapons
  skills: Skills
  spells: Spells
}

export function newCharacter(): Character {
  return {
    generalInformation: newGeneralInformation(),
    abilities: newAbilities(),
    bonds: newBonds(),
    features: newFeatures(),
    feats: newFeats(),
    weapons: newWeapons(),
    skills: newSkills(),
    spells: newSpells(),
  }
}
