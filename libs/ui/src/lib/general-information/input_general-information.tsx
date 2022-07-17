import { Grid, TextField, Checkbox } from "@mui/material";
import { Character } from "@wi-charsheet/character";
import { Control, useFieldArray, Controller } from "react-hook-form";
import { NumberInput } from "../util/util";

export interface InputGeneralInformationProps {
  control: Control<Character, any>
}

export const InputGeneralInformation = (props: InputGeneralInformationProps) => {
  const { control } = props

  const { fields } = useFieldArray({
    control,
    name: "generalInformation.keys"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Controller
        name="generalInformation.plName"
        control={control}
        render={({ field }) => <TextField id={field.name} label="PL名" variant="outlined" fullWidth={true} {...field} />} />
    </Grid>
    <Grid item xs={12}>
      <Controller
        name="generalInformation.pcName"
        control={control}
        render={({ field }) => <TextField id={field.name} label="PC名" variant="outlined" fullWidth={true} {...field} />} />
    </Grid>
    <Grid item xs={4}>
      <Controller
        name="generalInformation.race"
        control={control}
        render={({ field }) => <TextField id={field.name} label="種族" variant="outlined" fullWidth={true} {...field} />} />
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="generalInformation.age"
        control={control}
        label="年齢" />
    </Grid>
    <Grid item xs={4}>
      <Controller
        name="generalInformation.gender"
        control={control}
        render={({ field }) => <TextField id={field.name} label="性別" variant="outlined" fullWidth={true} {...field} />} />
    </Grid>
    <Grid item xs={12}>
      <Controller
        name="generalInformation.shapeAndOriginOfCapacity"
        control={control}
        render={({ field }) => <TextField id={field.name} label="<器>の形状と由来" variant="outlined" multiline={true} minRows={2} fullWidth={true} {...field} />} />
    </Grid>
    <Grid item xs={12}>
      <Controller
        name="generalInformation.reason"
        control={control}
        render={({ field }) => <TextField id={field.name} label="フェノメナでいる理由" variant="outlined" multiline={true} minRows={2} fullWidth={true} {...field} />} />
    </Grid>
    <Grid item xs={12}>
      <Controller
        name="generalInformation.appearance"
        control={control}
        render={({ field }) => <TextField id={field.name} label="外見の特徴など" variant="outlined" multiline={true} minRows={2} fullWidth={true} {...field} />} />
    </Grid>
    {fields.map((item, index) => <Grid item xs={4} key={item.id}>
      <Controller
        name={`generalInformation.keys.${index}.name`}
        control={control}
        render={({ field }) => <TextField id={field.name} label="キー" variant="outlined" sx={{ width: "80%" }} {...field} />} />
      <Controller
        name={`generalInformation.keys.${index}.used`}
        control={control}
        render={({ field }) => <Checkbox id={field.name} checked={field.value} {...field} />} />
    </Grid>
    )}
  </Grid>;
}

