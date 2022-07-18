import autoAnimate from "@formkit/auto-animate"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material"
import { Character } from "@wi-charsheet/character"
import { newFeat } from "@wi-charsheet/feats"
import { useEffect, useRef } from "react"
import { Control, Controller, useFieldArray } from "react-hook-form"
import { NumberInput } from "../util/util"

export interface InputFeatsProps {
  control: Control<Character, any>
}

export const InputFeats = (props: InputFeatsProps) => {
  const { control } = props
  const featsTableRef = useRef(null)

  useEffect(() => {
    featsTableRef.current && autoAnimate(featsTableRef.current)
  }, [featsTableRef.current])

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "feats.feats"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽特技</Typography>
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="feats.consumedExp"
        control={control}
        label="消費経験点" />
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="feats table">
          <TableBody ref={featsTableRef}>
            <TableRow>
              <TableCell variant="head">名称</TableCell>
              <TableCell variant="head">効果</TableCell>
              <TableCell variant="head">条件</TableCell>
              <TableCell variant="head">行操作</TableCell>
            </TableRow>
            {fields.map((p, index) => (
              <TableRow key={p.id}>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`feats.feats.${index}.name`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="名称" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '35%' }}>
                  <Controller
                    name={`feats.feats.${index}.effect`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '30%' }}>
                  <Controller
                    name={`feats.feats.${index}.condition`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="条件" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                  <IconButton aria-label="moveup feat" onClick={() => move(index, index - 1)} disabled={index == 0}>
                    <ArrowUpwardIcon />
                  </IconButton>
                  <IconButton aria-label="movedown feat" onClick={() => move(index, index + 1)} disabled={index == (fields.length - 1)}>
                    <ArrowDownwardIcon />
                  </IconButton>
                  <IconButton aria-label="delete feat" onClick={() => remove(index)}>
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
      <Button variant="contained" onClick={() => append(newFeat())}>行追加</Button>
    </Grid>
  </Grid>;
}

