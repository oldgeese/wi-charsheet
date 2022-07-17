import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Weapons as Data } from '@wi-charsheet/weapons';

export interface WeaponsProps {
  weapons: Data
}

export function Weapons(props: WeaponsProps) {
  const p = props.weapons
  return (
    <Grid container item direction="column">
      <div>
        <Typography variant="h6">▽武器</Typography>
      </div>
      <TableContainer>
        <Table aria-label="weapons table" sx={{border: '2px solid black', borderBottom: 'none'}}>
          <TableBody>
            <TableRow>
              <TableCell sx={{border: 0, width: '40%', justifyContent: 'space-between'}}>
                <Grid container>
                  <Grid item xs={7}>武器:{p.weapons[0].name}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[0].leftAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[0].rightAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                {p.weapons[0].percent}%
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '40%'}}>
                <Grid container>
                  <Grid item xs={7}>武器:{p.weapons[1].name}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[1].leftAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[1].rightAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                {p.weapons[1].percent}%
              </TableCell>
            </TableRow>
            <TableRow sx={{borderTop: '1px solid black'}}>
              <TableCell sx={{border: 0, width: '40%'}}>
                <Grid container>
                  <Grid item xs={7}>武器:{p.weapons[2].name}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[2].leftAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[2].rightAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                {p.weapons[2].percent}%
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '40%'}}>
                <Grid container>
                  <Grid item xs={7}>武器:{p.weapons[3].name}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[3].leftAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>{p.weapons[3].rightAbility}</Grid>
                  <Grid item xs={1} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
                {p.weapons[3].percent}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label="weapons table" sx={{border: '2px solid black'}}>
          <TableBody>
            <TableRow>
              <TableCell sx={{border: 0, width: '25%'}}>
                <Grid container>
                  <Grid item xs={2}>回避</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>{p.evade.leftAbility}</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>{p.evade.rightAbility}</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
                {p.evade.percent}%
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '25%'}}>
                <Grid container>
                  <Grid item xs={2}>防御</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>{p.defence.leftAbility}</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>{p.defence.rightAbility}</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
                {p.defence.percent}%
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '25%'}}>
                <Grid container>
                  <Grid item xs={2}>魔法抵抗</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>(</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>{p.spellResistance.leftAbility}</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>+</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>{p.spellResistance.rightAbility}</Grid>
                  <Grid item xs={2} sx={{textAlign: 'center'}}>)</Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
                {p.spellResistance.percent}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Weapons;
