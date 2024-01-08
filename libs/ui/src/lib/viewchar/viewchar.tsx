import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { Character } from '@wi-charsheet/character';
import { Charsheet } from '@wi-charsheet/ui';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const StyledViewChar = styled('div')`
@media print {
  .noprint {
    display: none;
  }
}
`

export function ViewChar() {
  const character = useLoaderData() as Character
  const { id } = useParams()

  return (
    <StyledViewChar>
      <Grid container spacing={1}>
        <Grid item className="noprint">
          <Link to="/">キャラクター一覧に戻る</Link>
        </Grid>
        <Grid item className="noprint">
          <Link to={"/editchar/"+id}>キャラクターを編集する</Link>
        </Grid>
        <div className="noprint"><br/><br/><br/></div>
        <Grid item xs={12}>
          <Charsheet character={character} />
        </Grid>
      </Grid>
    </StyledViewChar>
  )
}

export default ViewChar
