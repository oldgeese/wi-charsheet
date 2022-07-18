import autoAnimate from "@formkit/auto-animate"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, IconButton, Button } from "@mui/material"
import { Character } from "@wi-charsheet/character"
import { newSkill } from "@wi-charsheet/skills"
import { useRef, useEffect } from "react"
import { Control, useFieldArray, Controller } from "react-hook-form"
import { NumberInput } from "../util/util"

export interface InputSkillsProps {
  control: Control<Character, any>
}

export const InputSkills = (props: InputSkillsProps) => {
  const { control } = props
  const skillsTableRef = useRef(null)

  useEffect(() => {
    skillsTableRef.current && autoAnimate(skillsTableRef.current)
  }, [skillsTableRef.current])

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "skills.skills"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽技能</Typography>
    </Grid>
    <Grid item xs={4}>
      <NumberInput
        name="skills.consumedExp"
        control={control}
        label="消費経験点" />
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="skills table">
          <TableBody ref={skillsTableRef}>
            <TableRow>
              <TableCell variant="head">名称</TableCell>
              <TableCell variant="head">技能値</TableCell>
              <TableCell variant="head">行操作</TableCell>
            </TableRow>
            {fields.map((p, index) => (
              <TableRow key={p.id}>
                <TableCell sx={{ width: '30%' }}>
                  <Controller
                    name={`skills.skills.${index}.name`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="名称" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <NumberInput
                        name={`skills.skills.${index}.value`}
                        control={control}
                        label="技能値" />
                    </Grid>
                    <Grid item xs={3}>
                      %
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                  <IconButton aria-label="moveup skill" onClick={() => move(index, index - 1)} disabled={index == 0}>
                    <ArrowUpwardIcon />
                  </IconButton>
                  <IconButton aria-label="movedown skill" onClick={() => move(index, index + 1)} disabled={index == (fields.length - 1)}>
                    <ArrowDownwardIcon />
                  </IconButton>
                  <IconButton aria-label="delete skill" onClick={() => remove(index)}>
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
      <Button variant="contained" onClick={() => append(newSkill())}>行追加</Button>
    </Grid>
  </Grid>;
}

