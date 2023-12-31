import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface FreeInputProps {
  freeInput: string
}

export function FreeInput(props: FreeInputProps) {
  const p = props.freeInput
  return (
    <Grid container item direction='column'>
      <Typography variant="h6">▽メモ</Typography>
      <Typography variant='body1'>{p}</Typography>
    </Grid>
  );
}

export default FreeInput;
