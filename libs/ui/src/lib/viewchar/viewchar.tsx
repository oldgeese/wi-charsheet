import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { Character } from '@wi-charsheet/character';
import { getById } from '@wi-charsheet/service';
import { Charsheet } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const StyledViewChar = styled('div')`
@media print {
  .noprint {
    display: none;
  }
}
`

export function ViewChar() {
  const { id } = useParams()
  const [ character, setCharacter ] = useState<Character>()

  useEffect(() => {
    const getCharById = async () => {
      if (id) {
        const character = await getById(id)
        setCharacter(character)
      }
    }
    getCharById()
  }, [id])

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
