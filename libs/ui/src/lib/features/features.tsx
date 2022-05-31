import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Features as Data } from '@wi-charsheet/features';
import styled from 'styled-components';

export interface FeaturesProps {
  features: Data
}

const StyledFeatures = styled('div')``

const ComsumedExp = styled(Typography)`
  padding-left: 16px;
  text-decoration: underline;
` as typeof Typography

export function Features(props: FeaturesProps) {
  const p = props.features
  return (
    <StyledFeatures>
      <div>
        <Typography variant="h6" component="span">▽特徴</Typography>
        <ComsumedExp component="span">消費経験点:{p.consumedExp}</ComsumedExp>
      </div>
      <TableContainer>
        <Table aria-label="features table">
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell>効果</TableCell>
              <TableCell>由来</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
    </StyledFeatures>
  );
}

export default Features;
