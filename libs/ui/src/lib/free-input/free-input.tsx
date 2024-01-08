import { Grid, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { FreeInput as Data} from '@wi-charsheet/free-input'

export interface FreeInputProps {
  freeInput: Data
}

export function FreeInput(props: FreeInputProps) {
  const p = props.freeInput
  return (
    <Grid container item direction='column'>
      <Typography variant="h6">▽メモ</Typography>
      <TableContainer>
        <Table aria-label="free-input table">
          <TableRow>
            <TableCell>
              <Typography variant='body1' style={{whiteSpace: 'pre-line'}}>{p.freeInput}</Typography>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default FreeInput;
