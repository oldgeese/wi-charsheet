import { Character } from "@wi-charsheet/character";
import { createCharacter, getCharacter, getCharacters, updateCharacter } from "@wi-charsheet/persistent";

export const getAll = async () => { return await getCharacters() }
export const getById = async (id: string) => { return await getCharacter(id) }
export const create = async (char: Character) => { return await createCharacter(char) }
export const update = async (char: Character) => { return await updateCharacter(char) }
