import autoAnimate from "@formkit/auto-animate";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { newBond } from "@wi-charsheet/bonds";
import { Character } from "@wi-charsheet/character";
import { useEffect, useRef } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

export interface InputBondsProps {
  control: Control<Character, any>
}

export const InputBonds = (props: InputBondsProps) => {
  const { control } = props

  const bondsTableRef = useRef(null)

  useEffect(() => {
    bondsTableRef.current && autoAnimate(bondsTableRef.current)
  }, [bondsTableRef.current])

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "bonds"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽ボンド</Typography>
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="bonds table">
          <TableBody ref={bondsTableRef}>
            <TableRow>
              <TableCell variant="head">名前</TableCell>
              <TableCell variant="head">関係</TableCell>
              <TableCell variant="head">種別</TableCell>
              <TableCell variant="head" align="center">使用</TableCell>
              <TableCell variant="head">行操作</TableCell>
            </TableRow>
            {fields.map((p, index) => (
              <TableRow key={p.id}>
                <TableCell sx={{ width: '15%' }}>
                  <Controller
                    name={`bonds.${index}.name`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="名前" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '45%' }}>
                  <Controller
                    name={`bonds.${index}.relation`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="関係" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`bonds.${index}.type`}
                    control={control}
                    render={({ field }) => <RadioGroup row {...field}>
                      <FormControlLabel value="唯一" control={<Radio />} label="唯一" />
                      <FormControlLabel value="PC" control={<Radio />} label="PC" />
                      <FormControlLabel value="NPC" control={<Radio />} label="NPC" />
                    </RadioGroup>} />
                </TableCell>
                <TableCell align="center" sx={{ width: '5%' }}>
                  <Controller
                    name={`bonds.${index}.used`}
                    control={control}
                    render={({ field }) => <Checkbox id={field.name} checked={field.value} {...field} />} />
                </TableCell>
                <TableCell align="center" sx={{ width: '15%' }}>
                  <IconButton aria-label="moveup bond" onClick={() => move(index, index - 1)} disabled={index == 0}>
                    <ArrowUpwardIcon />
                  </IconButton>
                  <IconButton aria-label="movedown bond" onClick={() => move(index, index + 1)} disabled={index == (fields.length - 1)}>
                    <ArrowDownwardIcon />
                  </IconButton>
                  <IconButton aria-label="delete bond" onClick={() => remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    <Grid item>
      <Button variant="contained" onClick={() => append(newBond())} disabled={fields.length >= 5}>行追加</Button>
    </Grid>
  </Grid>;
}

