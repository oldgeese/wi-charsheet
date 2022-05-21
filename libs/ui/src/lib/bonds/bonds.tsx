import { Bond } from '@wi-charsheet/bonds';
import styled from '@emotion/styled';
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

const StyledBonds = styled('div')``
const StyledTableCell = styled(TableCell)`
  border: 1px solid black;
`

export function Bonds(props: BondsProps) {
  const ps = props.bonds
  return (
    <StyledBonds>
      <TableContainer>
        <Table aria-label="bonds table">
          <TableHead>
            <TableRow>
              <StyledTableCell>名前</StyledTableCell>
              <StyledTableCell>関係</StyledTableCell>
              <StyledTableCell>種別</StyledTableCell>
              <StyledTableCell align="center">使用</StyledTableCell>
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
