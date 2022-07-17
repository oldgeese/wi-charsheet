import { Character } from "@wi-charsheet/character";
import { InputAbilities, InputBonds, InputFeats, InputFeatures, InputFrequentlyUsedSpells, InputGeneralInformation, InputSkills, InputSpells, InputWeapons } from '@wi-charsheet/ui';
import { Control } from "react-hook-form";

export interface InputCharSheetProps {
  control: Control<Character, any>
}

export const InputCharSheet = (props:InputCharSheetProps) => {
  const { control } = props
  return <>
    <InputGeneralInformation control={control} />
    <InputAbilities control={control} />
    <InputBonds control={control} />
    <InputFeatures control={control} />
    <InputFeats control={control} />
    <InputWeapons control={control} />
    <InputSkills control={control} />
    <InputSpells control={control} />
    <InputFrequentlyUsedSpells control={control} />
    </>
}
