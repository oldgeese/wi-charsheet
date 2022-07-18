import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Features as Data } from '@wi-charsheet/features';
import { ConsumedExp } from '@wi-charsheet/ui';

export interface FeaturesProps {
  features: Data
}

export function Features(props: FeaturesProps) {
  const p = props.features
  return (
    <Grid container item direction="column">
      <div>
        <Typography variant="h6" component="span">▽特徴</Typography>
        <ConsumedExp component="span">消費経験点:{p.consumedExp}</ConsumedExp>
      </div>
      <TableContainer>
        <Table aria-label="features table">
          <TableBody>
            <TableRow>
              <TableCell variant="head">名称</TableCell>
              <TableCell variant="head">効果</TableCell>
              <TableCell variant="head">由来</TableCell>
            </TableRow>
            {p.features.map((p) => (
              <TableRow key={p.id}>
                <TableCell sx={{width: '20%'}}>{p.name}</TableCell>
                <TableCell sx={{width: '70%'}}>{p.effect}</TableCell>
                <TableCell sx={{width: '10%'}}>{p.origin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Features;
