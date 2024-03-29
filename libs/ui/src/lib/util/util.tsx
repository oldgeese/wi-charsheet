import { FormControl, InputLabel, MenuItem, Select, styled, TextField, TextFieldProps, Typography } from "@mui/material"
import { Character } from "@wi-charsheet/character"
import _ from "lodash"
import { Control, Controller, ControllerProps, useFormContext } from "react-hook-form"

export const NumberInput = (arg: Omit<ControllerProps<Character>, "render"> & TextFieldProps) => {
  const { formState: { errors } } = useFormContext<Character>()

  return <Controller
    name={arg.name}
    control={arg.control}
    render={({ field }) => (
      <TextField id={field.name} label={arg.label} variant="outlined" type="number" fullWidth={true} {...field}
        onChange={(e) => field.onChange(Number.isNaN(parseInt(e.target.value)) ? "" : parseInt(e.target.value))}
        error={_.get(errors, field.name) ? true : false}
        helperText={_.get(errors, field.name)?.message}/>
    )}
    />
}

type SelectAbilityProps = {
  name: any
  control: Control<Character, any> | undefined
}

export const SelectAbility = (props: SelectAbilityProps) => {
  const {name, control} = props
  return <Controller
    name={name}
    control={control}
    render={({ field }) => <FormControl fullWidth={true}>
      <InputLabel id={field.name}>能力</InputLabel>
      <Select
        id={field.name}
        label="能力"
        {...field}
      >
        <MenuItem value="筋力">筋力</MenuItem>
        <MenuItem value="敏捷">敏捷</MenuItem>
        <MenuItem value="技術">技術</MenuItem>
        <MenuItem value="知力">知力</MenuItem>
        <MenuItem value="感性">感性</MenuItem>
        <MenuItem value="魅力">魅力</MenuItem>
      </Select>
    </FormControl>}
    />
}

export const ConsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography
