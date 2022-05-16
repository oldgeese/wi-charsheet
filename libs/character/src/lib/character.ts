export interface Character {
  plName: string;
  pcName: string;
}

export function newCharacter(): Character {
  return {
    plName:"",
    pcName:"",
  }
}
