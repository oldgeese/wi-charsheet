import { Bond } from '@wi-charsheet/bonds';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

export interface BondsProps {
  bonds: Bond[]
}

const StyledBonds = styled.div` `
const StyledTableCell = styled(TableCell)`
  border: 1px solid
`

export function Bonds(props: BondsProps) {
  const ps = props.bonds
  return (
    <StyledBonds>
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
                <StyledTableCell>{p.name}</StyledTableCell>
                <StyledTableCell>{p.relation}</StyledTableCell>
                <StyledTableCell>{p.type}</StyledTableCell>
                <StyledTableCell align="center"><Checkbox checked={p.used} disabled/></StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledBonds>
  );
}

export default Bonds;
