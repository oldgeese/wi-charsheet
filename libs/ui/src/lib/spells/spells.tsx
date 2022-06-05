import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Spells as Data } from '@wi-charsheet/spells';

export interface SpellsProps {
  spells: Data
}

const StyledSpells = styled('div')``

const ComsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography

export function Spells(props: SpellsProps) {
  const p = props.spells
  return (
    <StyledSpells>
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
          <ComsumedExp>消費経験点:{p.consumedExp}</ComsumedExp>
        </Grid>
      </Grid>
      <TableContainer>
        <Table aria-label="spells table">
          <TableHead>
            <TableRow>
              <TableCell sx={{width: '10%'}}>判定値</TableCell>
              <TableCell sx={{width: '20%'}}>効果</TableCell>
              <TableCell sx={{width: '10%'}}>属性</TableCell>
              <TableCell sx={{width: '20%'}}>キーワード</TableCell>
              <TableCell sx={{width: '20%'}}>モーション</TableCell>
              <TableCell sx={{width: '20%'}}>アイテム</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
    </StyledSpells>
  );
}

export default Spells;
