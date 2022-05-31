import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Weapons as Data } from '@wi-charsheet/weapons';
import styled from 'styled-components';

export interface WeaponsProps {
  weapons: Data
}

const StyledWeapons = styled('div')``

export function Weapons(props: WeaponsProps) {
  const p = props.weapons
  return (
    <StyledWeapons>
      <div>
        <Typography variant="h6">▽武器</Typography>
      </div>
      <TableContainer>
        <Table aria-label="weapons table" sx={{border: '2px solid black', borderBottom: 'none'}}>
          <TableBody>
            <TableRow>
              <TableCell sx={{border: 0, width: '40%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '40%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
              </TableCell>
            </TableRow>
            <TableRow sx={{borderTop: '1px solid black'}}>
              <TableCell sx={{border: 0, width: '40%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '40%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '10%'}}>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label="weapons table" sx={{border: '2px solid black'}}>
          <TableBody>
            <TableRow>
              <TableCell sx={{border: 0, width: '25%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '25%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
              </TableCell>
              <TableCell sx={{border:0, borderLeft: '2px solid black', width: '25%'}}>
              </TableCell>
              <TableCell sx={{border: 0, borderLeft: '1px solid black', width: '8%'}}>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledWeapons>
  );
}

export default Weapons;
