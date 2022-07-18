import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Spells as Data } from '@wi-charsheet/spells';
import { ConsumedExp } from '@wi-charsheet/ui';

export interface SpellsProps {
  spells: Data
}

export function Spells(props: SpellsProps) {
  const p = props.spells
  return (
    <Grid container item direction="column">
      <Grid container spacing={1} sx={{alignItems: 'baseline'}}>
        <Grid item>
          <Typography variant="h6">▽魔法</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">基本発動能力値</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">[{p.leftAbility}]</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">+</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">[{p.rightAbility}]</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">({p.percent})%</Typography>
        </Grid>
        <Grid item>
          <ConsumedExp>消費経験点:{p.consumedExp}</ConsumedExp>
        </Grid>
      </Grid>
      <TableContainer>
        <Table aria-label="spells table">
          <TableBody>
            <TableRow>
              <TableCell variant="head" sx={{width: '10%'}}>判定値</TableCell>
              <TableCell variant="head" sx={{width: '20%'}}>効果</TableCell>
              <TableCell variant="head" sx={{width: '10%'}}>属性</TableCell>
              <TableCell variant="head" sx={{width: '20%'}}>キーワード</TableCell>
              <TableCell variant="head" sx={{width: '20%'}}>モーション</TableCell>
              <TableCell variant="head" sx={{width: '20%'}}>アイテム</TableCell>
            </TableRow>
            {p.spells.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.check}%</TableCell>
                <TableCell>{s.effect}</TableCell>
                <TableCell>{s.attribute}</TableCell>
                <TableCell>{s.keyword}</TableCell>
                <TableCell>{s.motion}</TableCell>
                <TableCell>{s.item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Spells;
