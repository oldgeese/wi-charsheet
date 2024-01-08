import { Grid, TextField, Typography } from "@mui/material";
import { Character } from "@wi-charsheet/character";
import { Control, Controller } from "react-hook-form";

export interface InputFreeInputProps {
  control: Control<Character, any>
}

export const InputFreeInput = (props: InputFreeInputProps) => {
  const { control } = props

  return <Grid container item>
    <Grid item xs={12}>
      <Typography variant="h6">▽メモ</Typography>
    </Grid>
    <Grid item xs={12}>
      <Controller
        name="freeInput.freeInput"
        control={control}
        render={({ field }) => <TextField id={field.name} label="メモ" variant="outlined" fullWidth={true} multiline={true} {...field} />} />
    </Grid>
  </Grid>

}
