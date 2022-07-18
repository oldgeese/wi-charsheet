import { Grid, Typography, TableContainer, Table, TableRow, TableCell, TableBody } from "@mui/material";
import { Character } from "@wi-charsheet/character";
import { Control, useWatch } from "react-hook-form";
import { NumberInput } from "../util/util";

export interface InputAbilitiesProps {
  control: Control<Character, any>
}

export const InputAbilities = (props: InputAbilitiesProps) => {
  const { control } = props

  const abilities = useWatch({
    control,
    name: "abilities"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽能力値</Typography>
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="abilities.consumedExp"
        control={control}
        label="消費経験点" />
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="abilities.exp"
        control={control}
        label="保有経験点" />
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="abilities.fullCount"
        control={control}
        label="フルカウント" />
    </Grid>
    <Grid item xs={6}>
      <NumberInput
        name="abilities.capacity"
        control={control}
        label="器" />
    </Grid>
    <Grid item xs={6}>
      <NumberInput
        name="abilities.initialCapacity"
        control={control}
        label="器の初期値" />
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="ability table">
          <TableBody>
            <TableRow>
              <TableCell variant="head" sx={{ width: "15rem" }}>能力値</TableCell>
              <TableCell variant="head">筋力</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <NumberInput
                  name="abilities.strength"
                  control={control}
                  label="筋力" />
              </TableCell>
              <TableCell>{abilities.strength + abilities.strength}%</TableCell>
              <TableCell variant="head">敏捷</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <NumberInput
                  name="abilities.dexterity"
                  control={control}
                  label="敏捷" />
              </TableCell>
              <TableCell>{abilities.dexterity + abilities.strength}%</TableCell>
              <TableCell>{abilities.dexterity + abilities.dexterity}%</TableCell>
              <TableCell variant="head">技術</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <NumberInput
                  name="abilities.technique"
                  control={control}
                  label="技術" />
              </TableCell>
              <TableCell>{abilities.technique + abilities.strength}%</TableCell>
              <TableCell>{abilities.technique + abilities.dexterity}%</TableCell>
              <TableCell>{abilities.technique + abilities.technique}%</TableCell>
              <TableCell variant="head">知力</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <NumberInput
                  name="abilities.intelligence"
                  control={control}
                  label="知力" />
              </TableCell>
              <TableCell>{abilities.intelligence + abilities.strength}%</TableCell>
              <TableCell>{abilities.intelligence + abilities.dexterity}%</TableCell>
              <TableCell>{abilities.intelligence + abilities.technique}%</TableCell>
              <TableCell>{abilities.intelligence + abilities.intelligence}%</TableCell>
              <TableCell variant="head">感性</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <NumberInput
                  name="abilities.sensibility"
                  control={control}
                  label="感性" />
              </TableCell>
              <TableCell>{abilities.sensibility + abilities.strength}%</TableCell>
              <TableCell>{abilities.sensibility + abilities.dexterity}%</TableCell>
              <TableCell>{abilities.sensibility + abilities.technique}%</TableCell>
              <TableCell>{abilities.sensibility + abilities.intelligence}%</TableCell>
              <TableCell>{abilities.sensibility + abilities.sensibility}%</TableCell>
              <TableCell variant="head">魅力</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <NumberInput
                  name="abilities.charisma"
                  control={control}
                  label="魅力" />
              </TableCell>
              <TableCell>{abilities.charisma + abilities.strength}%</TableCell>
              <TableCell>{abilities.charisma + abilities.dexterity}%</TableCell>
              <TableCell>{abilities.charisma + abilities.technique}%</TableCell>
              <TableCell>{abilities.charisma + abilities.intelligence}%</TableCell>
              <TableCell>{abilities.charisma + abilities.sensibility}%</TableCell>
              <TableCell>{abilities.charisma + abilities.charisma}%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>;
}

