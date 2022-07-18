import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Bond } from '@wi-charsheet/bonds';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

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
          <TableBody>
            <TableRow>
              <TableCell variant="head">名前</TableCell>
              <TableCell variant="head">関係</TableCell>
              <TableCell variant="head">種別</TableCell>
              <TableCell variant="head" align="center">使用</TableCell>
            </TableRow>
            {ps.map((p) => (
              <TableRow key={p.id}>
                <TableCell sx={{width: '25%'}}>{p.name}</TableCell>
                <TableCell sx={{width: '55%'}}>{p.relation}</TableCell>
                <TableCell sx={{width: '10%'}}>{p.type}</TableCell>
                <TableCell align="center" sx={{width: '10%'}}>{p.used ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Bonds;
