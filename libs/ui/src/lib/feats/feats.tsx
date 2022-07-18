import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Feats as Data } from '@wi-charsheet/feats';
import { ConsumedExp } from '@wi-charsheet/ui';

/* eslint-disable-next-line */
export interface FeatsProps {
  feats: Data
}

export function Feats(props: FeatsProps) {
  const p = props.feats
  return (
    <Grid container item direction="column">
      <div>
        <Typography variant="h6" component="span">▽特技</Typography>
        <ConsumedExp component="span">消費経験点:{p.consumedExp}</ConsumedExp>
      </div>
      <TableContainer>
        <Table aria-label="feats table">
          <TableBody>
            <TableRow>
              <TableCell variant="head">名称</TableCell>
              <TableCell variant="head">効果</TableCell>
              <TableCell variant="head">条件</TableCell>
            </TableRow>
            {p.feats.map((p) => (
              <TableRow key={p.id}>
                <TableCell sx={{width: '30%'}}>{p.name}</TableCell>
                <TableCell sx={{width: '40%'}}>{p.effect}</TableCell>
                <TableCell sx={{width: '30%'}}>{p.condition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Feats;
