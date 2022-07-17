import { Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField } from "@mui/material";
import { Character } from "@wi-charsheet/character";
import { Control, useFieldArray, Controller } from "react-hook-form";
import { NumberInput } from "../util/util";

export interface InputFeaturesProps {
  control: Control<Character, any>
}

export const InputFeatures = (props: InputFeaturesProps) => {
  const { control } = props
  const { fields } = useFieldArray({
    control,
    name: "features.features"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽特徴</Typography>
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="features.consumedExp"
        control={control}
        label="消費経験点" />
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="features table">
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell>効果</TableCell>
              <TableCell>由来</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((p, index) => (
              <TableRow key={p.id}>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`features.features.${index}.name`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="名称" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '70%' }}>
                  <Controller
                    name={`features.features.${index}.effect`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '10%' }}>
                  {p.origin}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>;
}

