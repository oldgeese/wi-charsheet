import { Grid, Typography, TableContainer, Table, TableBody, TableRow, TableCell, TextField } from "@mui/material";
import { Character } from "@wi-charsheet/character";
import { Control, Controller } from "react-hook-form";
import { SelectAbility, NumberInput } from "../util/util";

export interface InputWeaponsProps {
  control: Control<Character, any>
}

export const InputWeapons = (props: InputWeaponsProps) => {
  const { control } = props

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽武器</Typography>
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="weapons table" sx={{ border: '2px solid black', borderBottom: 'none' }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: 0, width: '40%', justifyContent: 'space-between' }}>
                <Grid container alignItems="center">
                  <Grid item xs={5}>
                    <Controller
                      name={`weapons.weapons.0.name`}
                      control={control}
                      render={({ field }) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.0.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.0.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '10%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.weapons.0.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, width: '40%', borderLeft: '2px solid black', justifyContent: 'space-between' }}>
                <Grid container alignItems="center">
                  <Grid item xs={5}>
                    <Controller
                      name={`weapons.weapons.1.name`}
                      control={control}
                      render={({ field }) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.1.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.1.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '10%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.weapons.1.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow sx={{ borderTop: '1px solid black' }}>
              <TableCell sx={{ border: 0, width: '40%', justifyContent: 'space-between' }}>
                <Grid container alignItems="center">
                  <Grid item xs={5}>
                    <Controller
                      name={`weapons.weapons.2.name`}
                      control={control}
                      render={({ field }) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.2.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.2.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '10%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.weapons.2.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, width: '40%', borderLeft: '2px solid black', justifyContent: 'space-between' }}>
                <Grid container alignItems="center">
                  <Grid item xs={5}>
                    <Controller
                      name={`weapons.weapons.3.name`}
                      control={control}
                      render={({ field }) => <TextField id={field.name} label="武器" variant="outlined" fullWidth={true} {...field} />} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.3.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.weapons.3.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={1} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '10%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.weapons.3.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label="weapons table" sx={{ border: '2px solid black' }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: 0, width: '25%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={2}>回避</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.evade.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.evade.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '8%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.evade.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow sx={{ borderTop: '1px solid black' }}>
              <TableCell sx={{ border: 0, borderLeft: '2px solid black', width: '25%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={2}>防御</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.defence.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.defence.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '8%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.defence.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
            <TableRow sx={{ borderTop: '1px solid black' }}>
              <TableCell sx={{ border: 0, borderLeft: '2px solid black', width: '25%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={2}>魔法抵抗</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>(</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.spellResistance.leftAbility" control={control} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>+</Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <SelectAbility name="weapons.spellResistance.rightAbility" control={control} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: 'center' }}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{ border: 0, borderLeft: '1px solid black', width: '8%' }}>
                <Grid container alignItems="center">
                  <Grid item xs={9}>
                    <NumberInput
                      name="weapons.spellResistance.percent"
                      control={control}
                      label="" />
                  </Grid>
                  <Grid item xs={3}>
                    %
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>;
}

