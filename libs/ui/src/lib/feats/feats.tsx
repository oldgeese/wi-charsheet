import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Feats as Data } from '@wi-charsheet/feats';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeatsProps {
  feats: Data
}

const ComsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography

export function Feats(props: FeatsProps) {
  const p = props.feats
  return (
    <Grid container item direction="column">
      <div>
        <Typography variant="h6" component="span">▽特技</Typography>
        <ComsumedExp component="span">消費経験点:{p.consumedExp}</ComsumedExp>
      </div>
      <TableContainer>
        <Table aria-label="feats table">
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell>効果</TableCell>
              <TableCell>条件</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
