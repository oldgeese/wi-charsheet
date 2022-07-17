import { Character } from '@wi-charsheet/character';
import { getById } from '@wi-charsheet/service';
import { Charsheet } from '@wi-charsheet/ui';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

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
      <div className="noprint">
        <Link to="/">キャラクター一覧に戻る</Link>
        <br/><br/>
      </div>
      <Charsheet character={character} />
    </StyledViewChar>
  )
}

export default ViewChar
