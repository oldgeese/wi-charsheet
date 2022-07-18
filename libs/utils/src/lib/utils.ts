import jsSHA from "jssha";
import { z } from "zod"

export const hash = (s: string): string=> {
  const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
  shaObj.update(s);
  const hash = shaObj.getHash("HEX");
  return hash
}

export const baseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string(),
  passwordConfirm: z.string(),
  passwordForUpdate: z.string(),
  generalInformation: z.any(),
  abilities: z.object({
    consumedExp: z.number(),
    exp: z.number(),
    fullCount: z.number(),
    capacity: z.number(),
    initialCapacity: z.number().min(20),
    strength: z.number().min(1).max(25),
    dexterity: z.number().min(1).max(25),
    technique: z.number().min(1).max(25),
    intelligence: z.number().min(1).max(25),
    sensibility: z.number().min(1).max(25),
    charisma: z.number().min(1).max(25),
  }),
  bonds: z.any(),
  features: z.any(),
  feats: z.any(),
  weapons: z.any(),
  skills: z.object({
    consumedExp: z.number(),
    skills: z.array(z.object({
      id: z.string(),
      name: z.string(),
      value: z.number().min(0).max(40),
    }))
  }),
  spells: z.object({
    leftAbility: z.string(),
    rightAbility: z.string(),
    percent: z.number().min(0).max(50),
    consumedExp: z.number(),
    spells: z.array(z.object({
      id: z.string(),
      check: z.number().min(0).max(90),
      effect: z.string(),
      attribute: z.string(),
      keyword: z.string(),
      motion: z.string(),
      item: z.string(),
      }))
  }),
  frequentlyUsedSpells: z.any()
})
