import { ApolloServer, gql } from "apollo-server-cloud-functions";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import "firebase-functions";

const typeDefs = gql`
type Character {
  generalInformation: GeneralInformation
  abilities: Abilities
  bonds: [Bond]
  features: Features
  feats: Feats
  weapons: Weapons
  skills: Skills
  spells: Spells
  frequentlyUsedSpells: [FrequentlyUsedSpell]
}

type Key {
  id: String
  name: String
  used: Boolean
}

type GeneralInformation {
  plName: String
  pcName: String
  race: String
  age: Int
  gender: String
  shapeAndOriginOfCapacity: String
  reason: String
  appearance: String
  keys: [Key]
}

type Abilities {
  consumedExp: Int
  exp: Int
  fullCount: Int
  capacity: Int
  initialCapacity: Int
  strength: Int
  dexterity: Int
  technique: Int
  intelligence: Int
  sensibility: Int
  charisma: Int
}

type Bond {
  id: String
  name: String
  relation: String
  type: String
  used: Boolean
}

type Features {
  consumedExp: Int
  features: [Feature]
}

type Feature {
  id: String
  name: String
  effect: String
  origin: String
}

type Feats {
  consumedExp: Int
  feats: [Feat]
}

type Feat {
  id: String
  name: String
  effect: String
  condition: String
}

type Weapon {
  id: String
  name: String
  leftAbility: String
  rightAbility: String
  percent: Int
}

type Evade {
  id: String
  leftAbility: String
  rightAbility: String
  percent: Int
}

type Defence {
  id: String
  leftAbility: String
  rightAbility: String
  percent: Int
}

type SpellResistance {
  id: String
  leftAbility: String
  rightAbility: String
  percent: Int
}

type Weapons {
  weapons: [Weapon]
  evade: Evade
  defence: Defence
  spellResistance: SpellResistance
}

type Skills {
  consumedExp: Int
  skills: [Skill]
}

type Skill {
  id: String
  name: String
  value: Int
}

type Spells {
  leftAbility: String
  rightAbility: String
  percent: Int
  consumedExp: Int
  spells: [Spell]
}

type Spell {
  id: String
  check: Int
  effect: String
  attribute: String
  keyword: String
  motion: String
  item: String
}

type FrequentlyUsedSpell {
  id: String,
  modifiedCheck: Int
  effect: String
  attribute: String
  keyword: String
  motion: String
  item: String
  extension: String
}

type Query {
  allCharacters: [Character]
}
`

admin.initializeApp()
const db = admin.firestore()

const resolvers = {
  Query:{
    allCharacters: async () => {
      const snapshot = await db
        .collection('characters')
        .get()

      return snapshot.docs.map(doc => {
        return doc.data()
      })
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req, res}) => ({
    headers: req.headers,
    req,
    res
  })
})

exports.graphql = functions.https.onRequest(server.createHandler())
