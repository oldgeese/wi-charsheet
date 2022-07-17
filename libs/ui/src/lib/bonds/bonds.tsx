import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Bond } from '@wi-charsheet/bonds';

export interface BondsProps {
  bonds: Bond[]
}

export function Bonds(props: BondsProps) {
  const ps = props.bonds
  return (
    <Grid container item direction="column">
      <Typography variant="h6">▽ボンド</Typography>
      <TableContainer>
        <Table aria-label="bonds table">
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>関係</TableCell>
              <TableCell>種別</TableCell>
              <TableCell align="center">使用</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ps.map((p) => (
              <TableRow key={p.id}>
                <TableCell sx={{width: '25%'}}>{p.name}</TableCell>
                <TableCell sx={{width: '55%'}}>{p.relation}</TableCell>
                <TableCell sx={{width: '10%'}}>{p.type}</TableCell>
                <TableCell align="center" sx={{width: '10%'}}><Checkbox checked={p.used} disabled/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Bonds;
