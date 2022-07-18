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
  createdAt: z.number(),
  updatedAt: z.number(),
  password: z.string(),
  passwordConfirm: z.string(),
  passwordForUpdate: z.string(),
  generalInformation: z.any(),
  abilities: z.object({
    consumedExp: z.number(),
    exp: z.number(),
    fullCount: z.number(),
    capacity: z.number(),
    initialCapacity: z.number().min(20, {message: "20以上を入力してください。"}),
    strength: z.number().min(1, {message: "1以上を入力してください。"}).max(25, {message: "25以下を入力してください。"}),
    dexterity: z.number().min(1, {message: "1以上を入力してください。"}).max(25, {message: "25以下を入力してください。"}),
    technique: z.number().min(1, {message: "1以上を入力してください。"}).max(25, {message: "25以下を入力してください。"}),
    intelligence: z.number().min(1, {message: "1以上を入力してください。"}).max(25, {message: "25以下を入力してください。"}),
    sensibility: z.number().min(1, {message: "1以上を入力してください。"}).max(25, {message: "25以下を入力してください。"}),
    charisma: z.number().min(1, {message: "1以上を入力してください。"}).max(25, {message: "25以下を入力してください。"}),
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
      value: z.number().min(0, {message: "0以上を入力してください。"}).max(40, {message: "40以下を入力してください。"}),
    }))
  }),
  spells: z.object({
    leftAbility: z.string(),
    rightAbility: z.string(),
    percent: z.number().min(0, {message: "0以上を入力してください。"}).max(50, {message: "50以下を入力してください。"}),
    consumedExp: z.number(),
    spells: z.array(z.object({
      id: z.string(),
      check: z.number().min(0, {message: "0以上を入力してください。"}).max(90, {message: "90以下を入力してください。"}),
      effect: z.string(),
      attribute: z.string(),
      keyword: z.string(),
      motion: z.string(),
      item: z.string(),
      }))
  }),
  frequentlyUsedSpells: z.any()
})
