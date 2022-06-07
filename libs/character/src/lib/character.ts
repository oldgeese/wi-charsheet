import { Abilities, newAbilities } from '@wi-charsheet/abilities'
import { Bond, newBonds } from '@wi-charsheet/bonds'
import { Feats, newFeats } from '@wi-charsheet/feats'
import { Features, newFeatures } from '@wi-charsheet/features'
import { FrequentlyUsedSpell, newFrequentlyUsedSpells } from '@wi-charsheet/frequently-used-spells'
import { GeneralInformation, newGeneralInformation } from '@wi-charsheet/general-information'
import { newSkills, Skills } from '@wi-charsheet/skills'
import { newSpells, Spells } from '@wi-charsheet/spells'
import { newWeapons, Weapons } from '@wi-charsheet/weapons'

export interface Character {
  generalInformation: GeneralInformation
  abilities: Abilities
  bonds: Bond[]
  features: Features
  feats: Feats
  weapons: Weapons
  skills: Skills
  spells: Spells
  frequentlyUsedSpells: FrequentlyUsedSpell[]
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
    frequentlyUsedSpells: newFrequentlyUsedSpells(),
  }
}
