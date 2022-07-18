import autoAnimate from "@formkit/auto-animate"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Typography, TableContainer, Table, TableRow, TableCell, TableBody, TextField, IconButton, Button } from "@mui/material"
import { Character } from "@wi-charsheet/character"
import { newSpell } from "@wi-charsheet/spells"
import { useRef, useEffect } from "react"
import { Control, useFieldArray, Controller } from "react-hook-form"
import { SelectAbility, NumberInput } from "../util/util"

export interface InputSpellsProps {
  control: Control<Character, any>
}

export const InputSpells = (props: InputSpellsProps) => {
  const { control } = props

  const spellsTableRef = useRef(null)

  useEffect(() => {
    spellsTableRef.current && autoAnimate(spellsTableRef.current)
  }, [spellsTableRef.current])

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "spells.spells"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽魔法</Typography>
    </Grid>
    <Grid container item alignItems="center" spacing={1}>
      <Grid item xs={2}>
        <Typography>基本発動能力値</Typography>
      </Grid>
      <Grid item xs={2}>
        <SelectAbility name="spells.leftAbility" control={control} />
      </Grid>
      <Grid item xs={0} justifySelf="center">
        <Typography>+</Typography>
      </Grid>
      <Grid item xs={2}>
        <SelectAbility name="spells.rightAbility" control={control} />
      </Grid>
      <Grid container item alignItems="center" xs={2}>
        <Grid item xs={9}>
          <NumberInput
            name="spells.percent"
            control={control}
            label="" />
        </Grid>
        <Grid item xs={3}>
          %
        </Grid>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="spells.consumedExp"
        control={control}
        label="消費経験点" />
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="spells table">
          <TableBody ref={spellsTableRef}>
            <TableRow>
              <TableCell variant="head">判定値</TableCell>
              <TableCell variant="head">効果</TableCell>
              <TableCell variant="head">属性</TableCell>
              <TableCell variant="head">キーワード</TableCell>
              <TableCell variant="head">モーション</TableCell>
              <TableCell variant="head">アイテム</TableCell>
              <TableCell variant="head">行操作</TableCell>
            </TableRow>
            {fields.map((p, index) => (
              <TableRow key={p.id}>
                <TableCell sx={{ width: '10%' }}>
                  <Grid container item alignItems="center">
                    <Grid item xs={9}>
                      <NumberInput
                        name={`spells.spells.${index}.check`}
                        control={control}
                        label="判定値" />
                    </Grid>
                    <Grid item xs={3}>
                      %
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`spells.spells.${index}.effect`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '10%' }}>
                  <Controller
                    name={`spells.spells.${index}.attribute`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="属性" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`spells.spells.${index}.keyword`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="キーワード" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`spells.spells.${index}.motion`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="モーション" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                  <Controller
                    name={`spells.spells.${index}.item`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="アイテム" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                  <IconButton aria-label="moveup spell" onClick={() => move(index, index - 1)} disabled={index == 0}>
                    <ArrowUpwardIcon />
                  </IconButton>
                  <IconButton aria-label="movedown spell" onClick={() => move(index, index + 1)} disabled={index == (fields.length - 1)}>
                    <ArrowDownwardIcon />
                  </IconButton>
                  <IconButton aria-label="delete spell" onClick={() => remove(index)}>
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
      <Button variant="contained" onClick={() => append(newSpell())}>行追加</Button>
    </Grid>
  </Grid>;
}

