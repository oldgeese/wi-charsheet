import { Grid, Typography, TableContainer, Table, TableBody, TableRow, TableCell, TextField } from "@mui/material";
import { Character } from "@wi-charsheet/character";
import { Control, useFieldArray, Controller } from "react-hook-form";
import { NumberInput } from "../util/util";

export interface InputFrequentlyUsedSpellsProps {
  control: Control<Character, any>
}

export const InputFrequentlyUsedSpells = (props: InputFrequentlyUsedSpellsProps) => {
  const { control } = props

  const { fields: frequentlyUsedSpellFields } = useFieldArray({
    control,
    name: "frequentlyUsedSpells"
  })

  return <Grid container item spacing={1}>
    <Grid item xs={12}>
      <Typography variant="h6">▽よく使う魔法</Typography>
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table aria-label="frequently-used-spells table">
          {frequentlyUsedSpellFields.map((p, index) => (
            <TableBody key={p.id} sx={{ border: "2px solid black" }}>
              <TableRow>
                <TableCell variant="head">修正後判定値</TableCell>
                <TableCell variant="head">効果</TableCell>
                <TableCell variant="head">属性</TableCell>
                <TableCell variant="head">キーワード</TableCell>
                <TableCell variant="head">モーション</TableCell>
                <TableCell variant="head">アイテム</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Grid container item alignItems="center">
                    <Grid item xs={9}>
                      <NumberInput
                        name={`frequentlyUsedSpells.${index}.modifiedCheck`}
                        control={control}
                        label="判定値" />
                    </Grid>
                    <Grid item xs={3}>
                      %
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Controller
                    name={`frequentlyUsedSpells.${index}.effect`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="効果" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`frequentlyUsedSpells.${index}.attribute`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="属性" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`frequentlyUsedSpells.${index}.keyword`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="キーワード" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`frequentlyUsedSpells.${index}.motion`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="モーション" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`frequentlyUsedSpells.${index}.item`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="アイテム" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">拡張要素⇒</TableCell>
                <TableCell colSpan={5}>
                  <Controller
                    name={`frequentlyUsedSpells.${index}.extension`}
                    control={control}
                    render={({ field }) => <TextField id={field.name} label="拡張要素" variant="outlined" fullWidth={true} {...field} />} />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Grid>
  </Grid>;
}

